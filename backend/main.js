"use strict";

// loading modules
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
var cors = require("cors");

// creating express app
const app = express();

// enabling cros-origin
app.use(cors());

// setup  request body json parsing
app.use(express.json());

// setup morgan
app.use(morgan("dev"));

// setting up listening port
app.set("port", process.env.PORT || 5000);

// setting up friendly greeting
app.get("/", (rea, res) =>
  res.json({ message: "welcome to the latest news api" })
);

// start listening
const server = app.listen(app.get("port"), () => {
  console.log(`latenews server running on ${server.address().port}`);
});
