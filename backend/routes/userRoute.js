// loading modules
const express = require("express");
const bcrypt = require("bcryptjs");
const auth = require("basic-auth");
const { check, validationResult } = require("express-validator");
const User = require("../schema/userSchema").UserSchema;
const router = express.Router();

//creating user
router.get("/", (req, res) => {
  res.json({
    message: "test"
  });
});

module.exports = router;
