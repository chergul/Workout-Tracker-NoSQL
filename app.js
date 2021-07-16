const express = require("express");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000

const app = express();


// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
