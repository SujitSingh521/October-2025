import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    // Removed dbName here — so Mongoose uses the database from URI
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected to:", mongoose.connection.name); // optional debug
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw new Error(error);
  }
}
