const mongoose = require("mongoose");

const leadSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  status: { type: String, enum: ["New", "Contacted", "Qualified", "Converted"], default: "New" },
  source: { type: String }, 
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("Lead", leadSchema);
