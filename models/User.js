const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, lowercase: true },
  name: { type: String, required: true },
  memos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Memo" }],
});

module.exports = mongoose.model("User", userSchema);
