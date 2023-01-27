// const router = require("express").Router();
// const mongoose = require("mongoose");
// const postMsg = require("../models/post");
// const auth = require("../middleware/auth");
// const jwt = require('jsonwebtoken')
// require('dotenv').config()

// const jwtVerify = (req,res,next) => {
//   const token = req.headers.authorization.split(" ")[1];

//   jwt.verify(token, process.env.SECRET, (err, payload) => {
//     if(err){
//       return res.status(401).json({error: "Unauthorized"})
//     }
//     req.user = payload
//     next()
//   })
// }

// router
//   .route("/")
//   //Get all posts
//   .get(async (req, res) => {
//     try {
//       const postMessages = await postMsg.find();
//       res.status(200).json(postMessages);
//     } catch (error) {
//       res.status(404).json({ message: error.message });
//     }
//   })
//   //create new post
//   .post(auth, async (req, res) => {
//     const { title, message, selectedFile, creator, tags } = req.body;

//     const newPost = new postMsg({
//       title,
//       message,
//       selectedFile,
//       creator,
//       tags,
//     });
//     try {
//       await newPost.save();
//       res.status(201).json(newPost);
//     } catch (error) {
//       res.status(409).json({ message: error.message });
//     }
//   })
//   .delete(async (req, res) => {
//     try {
//       await postMsg.deleteMany({});
//       res.json("all posts have been deleted");
//     } catch (error) {
//       res.json({ error });
//     }
//   });

// router
//   .route("/:id")
//   //get a post
//   .get(auth, async (req, res) => {
//     const { id } = req.params;
//     const verifyPost = await postMsg.findById(id);
//     if (!verifyPost) {
//       return res.json(`No post with id: ${id}`);
//     }
//     try {
//       //Checks for post with ID
//       if (!mongoose.Types.ObjectId.isValid(id))
//         return res.status(404).send(`No post with id: ${id}`);
//       const wantedPost = await postMsg.findById(id);
//       res.status(200).json(wantedPost);
//     } catch (error) {
//       res.status(404).json({ message: error.message });
//     }
//   })
//   //Update post
//   .patch(auth, async (req, res) => {
//     const { id } = req.params;
//     const verifyPost = await postMsg.findById(id);
//     if (!verifyPost) {
//       return res.json(`No post with id: ${id}`);
//     }
//     const { title, message, creator, selectedFile, tags } = req.body;

//     const updatedPost = {
//       title,
//       message,
//       creator,
//       selectedFile,
//       tags,
//       _id: id,
//     };
//     try {
//       //findByIdAndUpdate:used to find a matching document, updates it according to the update arg, passing any options,
//       // and returns the found document (if any) to the callback.
//       //new: true = returns the modified document rather than the original
//       await postMsg.findByIdAndUpdate(id, updatedPost, { new: true });
//       res.json(updatedPost);
//     } catch (error) {
//       res.json({ error: error.message });
//     }
//   })
//   .delete(auth, async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id))
//       return res.status(404).send(`No post with id: ${id}`);

//     //The findByIdAndRemove() function is used to find a matching
//     // document, remove it, passing the found document (if any) to the callback.

//     await postMsg.findByIdAndRemove(id);
//     res.json({ message: "Post deleted succesfully." });
//   });

// router.patch("/:id/likes", auth, async (req, res) => {
//   const { id } = req.params;
//   const verifyPost = await postMsg.findById(id)
//     if(!verifyPost){
//       return res.json(`No post with id: ${id}`)
//     }
//   const post = await postMsg.findById(id);
//   const update = await postMsg.findByIdAndUpdate(
//     id,
//     { likes: post.likes + 1 },
//     { new: true }
//   );
//   res.json(update);
// });

// router.patch("/:id/dislikes", auth, async (req, res) => {
//   const { id } = req.params;
//   const verifyPost = await postMsg.findById(id)
//     if(!verifyPost){
//       return res.json(`No post with id: ${id}`)
//     }

//   const post = await postMsg.findById(id);

//   const update = await postMsg.findByIdAndUpdate(
//     id,
//     { dislikes: post.dislikes + 1 },
//     { new: true }
//   );
//   res.json(update);
// });

// module.exports = router;
