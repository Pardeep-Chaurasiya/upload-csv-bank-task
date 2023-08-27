const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const path = require("path");
const db = require("./config/db")();
const hdfcRoute = require("./routes/hdfcRoute");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use("/", hdfcRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("server started");
});
