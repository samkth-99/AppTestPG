const express = require("express");
const path = require("path");

// Creating the Express server
const app = express();

require("dotenv").config()

// Server configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started (http://localhost:3000/) !");
});

// GET /
app.get("/", (req, res) => {
  // res.send("Hello world...");
  res.render("index");
});

// GET /about
app.get("/about", (req, res) => {
  res.render("about");
});

// GET /data
app.get("/data", (req, res) => {
  const test = {
    titre: "Test",
    items: ["one", "two", "three"]
  };
  res.render("data", { model: test });
});

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});