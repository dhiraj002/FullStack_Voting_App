import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_LOCAL_URI || process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(uri);

    console.log(`✅ MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
