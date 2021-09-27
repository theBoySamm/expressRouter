const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose")
require("dotenv").config();
const connectDB = require("./models/index")
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const homeRoute = require("./routes/homeRoute")
const reviewRoute = require("./routes/reviewRoute")

app.use("/", homeRoute)
app.use("/reviews", reviewRoute);











const PORT = 5000;
app.listen(process.env.PORT || 5000, () => {
  "Server started on port " + PORT;
});
connectDB()