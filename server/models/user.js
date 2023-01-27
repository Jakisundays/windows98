const mongoose = require("mongoose");

const userSChema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // created: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSChema);
