const AbstractManager = require("./AbstractManager");

class PriceManager extends AbstractManager {
  constructor() {
    super({ table: "price" });
  }

  insert(price) {
    return this.connection.query(
      `INSERT INTO ${this.table} 
      (cat_premium_min, cat_premium_max, cat_a_min, cat_a_max, cat_b_min, cat_b_max, cat_c_min, cat_c_max, cat_d_min, cat_d_max) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        price.cat_premium_min,
        price.cat_premium_max,
        price.cat_a_min,
        price.cat_a_max,
        price.cat_b_min,
        price.cat_b_max,
        price.cat_c_min,
        price.cat_c_max,
        price.cat_d_min,
        price.cat_d_max
      ]
    );
  }

  update(price) {
    const {
        cat_premium_min,
        cat_premium_max,
        cat_a_min,
        cat_a_max,
        cat_b_min,
        cat_b_max,
        cat_c_min,
        cat_c_max,
        cat_d_min,
        cat_d_max,
        id
    } = price

    return this.connection.query(
      `UPDATE ${this.table} SET cat_premium_min = ?, cat_premium_max = ?, cat_a_min = ?, cat_a_max = ?, cat_b_min = ?, cat_b_max = ?, cat_c_min = ?, cat_c_max = ?, cat_d_min = ?, cat_d_max = ? WHERE id = ?`,
      [
        cat_premium_min,
        cat_premium_max,
        cat_a_min,
        cat_a_max,
        cat_b_min,
        cat_b_max,
        cat_c_min,
        cat_c_max,
        cat_d_min,
        cat_d_max,
        id
      ]
    );
  }
}

module.exports = PriceManager;
