const argon2 = require("@node-rs/argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: "argon2id",
  memoryCost: 65536,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;
    console.log(req.body);
    if (!password) {
      return res.status(400).send("Hashpassword error, password is required.");
    }
    const hashedPassword = await argon2.hash(password, hashingOptions);
    console.log(hashedPassword);
    req.body.hashedPassword = hashedPassword;
    delete req.body.password;

    return next();
  } catch (err) {
    console.error(err);
    res.status(500).send("Hashpassword Internal Server Error");
    return null;
  }
};

const verifyPassword = async (req, res) => {
  console.warn(req.body, "this is my verifypassword body");
  console.warn(req.admin, "this is my verifypassword user");
  try {
    const { password } = req.body;
    const { hashedPassword } = req.admin;
    console.log("Password:", password);
    console.log("Hashed Password:", hashedPassword);
    if (!hashedPassword || !password) {
      return res
        .status(400)
        .send("Invalid request a l'étape 1 du verifypassword.");
    }
    const isVerified = await argon2.verify(hashedPassword, password);
    if (isVerified) {
      const user = { ...req.admin };
      delete user.hashedPassword;
      const payload = { cargo: req.admin };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1000",
      });

      res.status(200).send({ token });
      return null;
    } else {
      console.log("Password verification failed");
      res.status(401).send("Invalid username or password");
      return null;
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("VerifyPassword Internal servor error");
    return null;
  }
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header has an incorrect type");
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.payload = payload;
    next();
  } catch (err) {
    console.error(err);
    if (err.name === "JsonWebTokenError") {
      res.status(401).send("verifytoken, Invalid token");
    } else if (err.name === "TokenExpiredError") {
      res.status(401).send("verifytoken, Token has expired");
    } else {
      res.status(401).send("verifytoken error, unauthorized");
    }
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
