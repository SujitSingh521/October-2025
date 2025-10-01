import { connectDB } from "../../../lib/mongodb";
import User from "../../../models/User";

// POST - create user
export async function POST(req) {
  try {
    await connectDB();
    const { name, email, age, city } = await req.json();

    const newUser = new User({ name, email, age, city });
    await newUser.save();

    return new Response(JSON.stringify({ success: true, users: [newUser] }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

// GET - fetch all users
export async function GET(req) {
  try {
    await connectDB();
    const users = await User.find({});
    return new Response(JSON.stringify({ success: true, users }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
