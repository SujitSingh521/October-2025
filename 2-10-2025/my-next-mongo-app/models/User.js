import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  city: { type: String }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
