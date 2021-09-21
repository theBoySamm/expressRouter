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
const userRoute = require("./routes/userRoute")

app.use("/", homeRoute)
app.use("/users", userRoute);











const PORT = 3000;
app.listen(process.env.PORT || 3000, () => {
  "Server started on port " + PORT;
});
connectDB()