const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  company: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Who added this contact
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
