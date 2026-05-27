const db = require("../config/db");

const createOrder = (req, res) => {
  const { name, email, phone, address, mango, quantity } = req.body;

  const sql = `
    INSERT INTO orders 
    (name, email, phone, address, mango, quantity)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, email, phone, address, mango, quantity],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(201).json({
          message: "Order Placed Successfully",
        });
      }
    }
  );
};

module.exports = { createOrder };