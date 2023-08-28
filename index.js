const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const path = require("path");
const db = require("./config/db")();
const cors = require("cors");
const bankRoute = require("./routes/bankRoute");

const app = express();
app.use(cors({ origin: "*" }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "public")));
app.use("/", bankRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server started");
});
