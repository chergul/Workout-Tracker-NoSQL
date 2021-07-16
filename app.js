const express = require("express");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "notetaker";
// const collections = ["notes"];

// const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});


// Set the app to listen on port 3000
app.listen(3000, () => {
  console.log("App running on port 3000!");
});
