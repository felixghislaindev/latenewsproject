// loading modules
const express = require("express");
const bcrypt = require("bcryptjs");
const auth = require("basic-auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../schema/userSchema").UserSchema;
const router = express.Router();

//creating user
router.get("/", (req, res) => {
  res.json({
    message: "test"
  });
});

//register handle
router.post(
  "/",
  [
    // email validation
    check("firstName")
      .exists()
      .withMessage('Please provide a value for "firstName"'),
    check("lastName")
      .exists({ checkNull: true, checkFalsy: true })
      .withMessage('Please provide a value for "lastName"'),
    check("emailAddress")
      .exists({ checkNull: true, checkFalsy: true })
      .isEmail()
      .withMessage(
        'Please provide a value for "email" example:"jhon@yahoo.com'
      ),
    check("password")
      .isLength({ min: 5 })
      .withMessage('Please provide a value for "password"')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Use the Array `map()` method to get a list of error messages.
      const errorMessages = errors.array().map(error => error.msg);

      // Return the validation errors to the client.
      return res.status(400).json({ errors: errorMessages });
    }
    // validating topic choices
    if (req.body.topicChoices.length === 0) {
      res.status(400).json({ errors: "please do select a topic" });
    }

    const { firstName, lastName, email, password, topicChoices } = req.body;

    console.log(req.body);
    res.send("sucess");
  }
);
module.exports = router;
