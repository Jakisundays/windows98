const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET;

router
  .route("/")
  .get(async (req, res) => {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ message: "quepaso" });
    }
  })
  .delete(async (req, res) => {
    try {
      await User.deleteMany({});
    } catch (error) {
      return res.status(500).json({ msg: "quepaso" });
    }
    res.status(202).json({ message: "Deleted all" });
  });

// LOGIN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const registeredUser = await User.findOne({ username });

    if (!registeredUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const pswVerify = await bcrypt.compare(password, registeredUser.password);
    if (!pswVerify) {
      return res.status(400).json({ message: "Invalid password." });
    }

    const token = jwt.sign({ username, id: registeredUser._id }, secret);

    res.status(201).json({
      result: registeredUser,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

//REGISTER
router.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const registeredUser = await User.findOne({ username });

    if (registeredUser) {
      return res.status(404).json({ message: "Username already exists." });
    }

    const hashPsw = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashPsw,
      username,
    });

    await newUser.save();
    //Returns the JsonWebToken as string
    const token = jwt.sign(
      {
        email,
        id: newUser._id,
      },
      secret
    );

    res.status(201).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
