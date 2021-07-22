const express = require("express");
// const mongojs = require("mongojs");
const mongoose = require("mongoose");

// HTTP request logger middleware
const logger = require("morgan");

const PORT = process.env.PORT || 8080

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Bind database

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));


// Set the app to listen on port 8080
app.listen(PORT, () => {
  console.log("App running on port 8080!");
});
