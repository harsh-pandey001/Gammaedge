const User = require("../model/user");
const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

//route :1 For signup
router.post("/create", async (req, res) => {
  console.log("connected with backend", req.body);
  const newuser = new User({
    name: req.body.name,
    email: req.body.email,
    num: req.body.num,
    password: req.body.password,
    nationality: req.body.nationality,
    gender: req.body.gender,
  });

  let complete = await newuser.save();
  res.json({ complete });
});


// Route 2 : Login
router.post(
  "/login",
  [
    body("email", "Enter a valid E-mail").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],

  async (req, res) => {
    // if there are errors, return bad request and errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "please try to login with correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "please try to login with correct credentials",
          });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      // const authtoken = jwt.sign(data, JWT_SECRET);
      // success = true;
      // res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server occur");
    }
  }
);

module.exports = router;
