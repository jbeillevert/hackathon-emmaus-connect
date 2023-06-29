require("dotenv").config();

const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`DROP DATABASE IF EXISTS ${DB_NAME}`);
  await connection.query(`CREATE DATABASE ${DB_NAME}`);
  await connection.query(`USE ${DB_NAME}`);

  const sql = fs.readFileSync("./database.sql", "utf8");

  await connection.query(sql);

  connection.end();
};

(async () => {
  try {
    await migrate();
  } catch (err) {
    console.error(err);
  }
})();

const models = {};

const AdminManager = require("./src/models/AdminManager");
const PriceManager = require("./src/models/PriceManager");

models.admin = new AdminManager();
models.price = new PriceManager();

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = string =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
