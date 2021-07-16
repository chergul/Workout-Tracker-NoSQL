const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
// HTTP request logger middleware
const logger = require("morgan");

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// app.use(require("./routes/apiRoutes"));
// app.use(require("./routes/htmlRoutes"));


// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
