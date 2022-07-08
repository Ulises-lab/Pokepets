const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    content: String
  },
  {
    timestamps: true
  }
);

//nota como commen requiere el id del user, entonces jalas con ref el user.

const Comment = model("Comment", commentSchema);

module.exports = Comment;
