const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   🗄️ MYSQL CONNECTION
========================= */
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",   // XAMPP default
  database: "imperial_mango"
});

db.connect((err) => {
  if (err) {
    console.log("Database Connection Error:", err);
  } else {
    console.log("MySQL Connected Successfully");
  }
});

/* =========================
   📦 ROUTES
========================= */
const orderRoutes = require("./routes/orderRoutes")(db);

app.use("/api/orders", orderRoutes);

/* =========================
   🚀 START SERVER
========================= */
app.listen(5000, () => {
  console.log("Server running on port 5000");
});