const express = require("express");

module.exports = (db) => {
  const router = express.Router();

  router.post("/", (req, res) => {
    const { name, email, phone, address, mango, quantity } = req.body;

    // 🔥 STEP 1: PRICE GET FROM DB
    db.query(
      "SELECT price FROM mango_prices WHERE mango_type = ?",
      [mango],
      (err, result) => {
        if (err) return res.status(500).json(err);

        const price = result[0].price;
        const totalBill = price * quantity;

        // 🔥 STEP 2: SAVE ORDER
        db.query(
          "INSERT INTO orders (name, email, phone, address, mango, quantity, totalBill) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [name, email, phone, address, mango, quantity, totalBill],
          (err2, result2) => {
            if (err2) return res.status(500).json(err2);

            res.json({
              message: "Order placed successfully",
              totalBill: totalBill
            });
          }
        );
      }
    );
  });

  // 📥 GET ALL ORDERS
  router.get("/", (req, res) => {
    db.query("SELECT * FROM orders", (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  });

  return router;
};