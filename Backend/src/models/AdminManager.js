const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  insert(admin) {
    const { username, email, hashedPassword } = admin;
    return this.connection.query(
      `insert into ${this.table} 
      (username, email, hashedpassword) values (?, ?, ?)`,
      [username, email, hashedPassword]
    );
  }
}

module.exports = AdminManager;
