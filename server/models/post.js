const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  message: String,
  creator: {
    type: String,
    require: true,
  },
  tags: [String],
  selectedFile: String,
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Post", postSchema);
