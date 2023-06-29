const AbstractManager = require("./AbstractManager");

class PriceManager extends AbstractManager {
  constructor() {
    super({ table: "price" });
  }

  insert(price) {
    return this.database.query(
      `insert into ${this.table} 
      (cat_premium, cat_a, cat_b, cat_c, cat_d) values (?, ?, ?, ?, ?)`,
      [
        price.cat_premium,
        price.cat_a,
        price.cat_b,
        price.cat_c,
        price.cat_d
      ]
    );
  }

  update(price) {
    return this.database.query(
      `update ${this.table} set cat_premium = ?, cat_a = ?, cat_b = ?, cat_c = ?, cat_d = ? where id = ?`,
      [
        price.cat_premium,
        price.cat_a,
        price.cat_b,
        price.cat_c,
        price.cat_d,
        price.id
      ]
    );
  }
}

module.exports = PriceManager;
