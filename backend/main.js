"use strict";

// loading modules
const express = require("express");
const morgan = require("morgan");
const userRoute = require("./routes/userRoute");
var cors = require("cors");

// connecting to mongo Atlas

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://felixghislain:bonjour@latenewsdb-pwqtc.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client
  .connect()
  .then(res => console.log("connected ..."))
  .catch(err => console.log(err));

// creating express app
const app = express();

// enabling cros-origin
app.use(cors());

// bodyparser
app.use(express.urlencoded({ extended: false }));

// setup request body json parsing
app.use(express.json());

// setup morgan
app.use(morgan("dev"));

// setting up listening port
app.set("port", process.env.PORT || 5000);

// setting up friendly greeting
app.get("/", (req, res) =>
  res.json({ message: "welcome to the latest news api" })
);
// using the user route
app.use("/user", userRoute);

// start listening
const server = app.listen(app.get("port"), () => {
  console.log(`latenews server running on ${server.address().port}`);
});
