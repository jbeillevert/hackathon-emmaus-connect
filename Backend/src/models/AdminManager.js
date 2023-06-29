const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  insert(admin) {
    return this.database.query(
      `insert into ${this.table} 
      (username, email, hashedpassword) values (?, ?, ?)`,
      [admin.username, admin.email, admin.password]
    );
  }
}

module.exports = AdminManager;
