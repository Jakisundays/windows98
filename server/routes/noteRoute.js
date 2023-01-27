const router = require("express").Router();
// const mongoose = require("mongoose");
const Note = require("../models/note");
// const verifyToken = require('../middleware/verifyToken')
//Mover a MiddleWare
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.user = payload;
    next();
  });
};

//Routes
// router
//   .route("/")
//Make a note
router.post("/:username", verifyToken, async (req, res) => {
  const { username } = req.params;
  console.log(req.user);
  const { title, message } = req.body;
  const newNote = new Note({
    title,
    message,
    creator: username,
  });
  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router
  .route("/")
  //Developer calls
  .get(async (req, res) => {
    try {
      const allNotes = await Note.find();
      res.json(allNotes);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  })
  .delete(async (req, res) => {
    try {
      await Note.deleteMany({});
      res.json("all posts have been deleted");
    } catch (error) {
      res.json({ error });
    }
  });

router.get("/allnotes/:username", verifyToken, async (req, res) => {
  const { username } = req.params;
  try {
    const userNotes = await Note.find({ creator: username });
    console.log(userNotes);
    if (!userNotes) {
      return res.status(300).json(`No post with username: ${username}`);
    }
    res.status(200).json({ userNotes });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router
  .route("/:id")
  //update note
  .patch(verifyToken, async (req, res) => {
    const { id } = req.params;
    const verifyNote = await Note.findById(id);
    if (!verifyNote) {
      return res.json(`No post with id: ${id}`);
    }
    const { username } = req.user;
    const { title, message } = req.body;
    const updatedNote = {
      title,
      message,
      creator: username,
      _id: id,
    };
    try {
      await Note.findByIdAndUpdate(id, updatedNote, { new: true });
      res.json(updatedNote);
    } catch (error) {
      res.json({ error: error.message });
    }
  })
  //Remove Note
  .delete(verifyToken, async (req, res) => {
    const { id } = req.params;
    const verifyPost = await Note.findById(id);
    if (!verifyPost) {
      return res.json(`No note with id: ${id}`);
    }
    try {
      await Note.findByIdAndRemove(id);
      res.json({ message: "Note deleted succesfully." });
    } catch (error) {
      res.json({ message: error.message });
    }
  });

module.exports = router;
