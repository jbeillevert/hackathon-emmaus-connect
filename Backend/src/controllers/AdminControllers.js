const models = require("../models");

const browse = (req, res) => {
  models.admin
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const browse");
    });
};

const read = (req, res) => {
  models.admin
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const read");
    });
};

const edit = (req, res) => {
  const admin = req.body;

  // TODO validations (length, format...)

  admin.id = parseInt(req.params.id, 10);

  models.admin
    .update(admin)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const edit");
    });
};

const add = (req, res) => {
  const admin = req.body;
  console.log("Coucou", req.body);
  models.admin
    .insert(admin)
    .then(([result]) => {
      res.location(`/admin/${result.insertId}`).sendStatus(201);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const add");
    });
};

const destroy = (req, res) => {
  models.admin
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500).send("error const destroy");
    });
};

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { username, password } = req.body; // Destructure both username and password

  models.admin
    .findByUsername(username)
    .then(([result]) => {
      if (result[0] != null) {
        req.admin = result[0]; // Set req.admin to the found admin object
        console.warn("user identified by Username, so far so good");
        next();
      } else {
        res.status(401).send("Invalid username or password"); // Return 401 Unauthorized if user is not found
      }
    })
    .catch(err => {
      console.error(err);
      res
        .status(500)
        .send("UserController level, error retrieving data from database");
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  getUserByEmailWithPasswordAndPassToNext,
};
