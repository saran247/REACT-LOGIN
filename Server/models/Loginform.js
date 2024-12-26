const mongoose = require("mongoose");

const LoginformSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const LoginformModel = mongoose.model("users", LoginformSchema);

module.exports = LoginformModel;