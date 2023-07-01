const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  insert(admin) {
    const { username, email, hashedPassword } = admin;

    return this.connection.query(
      `INSERT INTO ${this.table} (username, email, hashedPassword) VALUES (?, ?, ?)`,
      [username, email, hashedPassword]
    );
  }

  update(admin) {
    const { username, email, id } = admin;
    return this.connection.query(
      `UPDATE ${this.table} SET username=?, email=? WHERE id=?`,
      [username, email, id]
    );
  }

  findByUsername(username) {
    return this.connection
      .query(`SELECT * FROM ${this.table} WHERE username = ?`, [username])
      .catch(error => {
        console.error(error);
        throw new Error("Failed to retrieve data from the database AZERTY.");
      });
  }
}

module.exports = AdminManager;
