const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./database/database");
const router = require("./routes/product.route");

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
