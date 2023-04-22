const mongoose = require("mongoose");

const memoSchema = new mongoose.Schema(
  {
    content: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Memo", memoSchema);
