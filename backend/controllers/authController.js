"use strict";

const bcrypt = require("bcrypt");

// Even though this is a controller for auth, we can still use the model for User
const Models = require("../models");

// This is the same as the createUser function; however, this is the one that should be used for user sign up through the auth route
// See /controllers/userController.js
const signUpUser = async (data, res) => {
  // Bcrypt documentation: https://www.npmjs.com/package/bcrypt
  // Generate a salt, define the rounds, optional: define version ("a", or "b") default: "b"
  const rounds = 10; //any more than 10 will take exponentially more CPU power. Runs on the server.
  const version = "a";
  const salt = await bcrypt.genSaltSync(rounds, version);
  const originalPassword = data.password;
  const hashedPassword = bcrypt.hashSync(originalPassword, salt);

  // Update data.password to the new hashed password BEFORE storing it in the database
  data.password = hashedPassword;

  Models.User.create(data)
    .then((data) => {
      // We NEVER want to send the hashed password back, EVER
      // Reset the password back to the originalPassword before returning
      data.password = originalPassword;
      res.send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log("Error:", err);
      throw err;
    });
};

// All logins should be using this function to login by email and password
const loginUserByEmail = (req, res) => {
  const unhashedPassword = req.body.password;
  const email = req.body.email;

  Models.User.scope("withPassword")
    .findAll({ where: { email: email } })
    .then((data) => {
      //If email exists in the database, pull the stored password (which is hashed)
      //and compare it to the payload from the request body
      if (
        data &&
        bcrypt.compareSync(unhashedPassword, data[0].dataValues.password)
      ) {
        data[0].dataValues.password = undefined
          res.status(200).send({ success: true, data: data });
      } else {
        console.log("password is incorrect");
        // Obfuscate the response, don't let potential attackers know if they have the correct login email or username!
        // Use the payload key "success" to programmatically tell your application what to do next:
        // If (response.success === true) { show login success, allow access to protected routes }
        // else if (response.success === false) { show login error message, ask user to check username email and password and try again }
        // NOTE: these are boolean values, NOT strings (true vs "true")
        res.status(403).send({ success: false, data: "Wrong username or password!"})
      }
    })
    .catch(err => {
      console.log("Error:", err)
      throw err
    })
};

module.exports = {
  signUpUser, 
  loginUserByEmail,
};
