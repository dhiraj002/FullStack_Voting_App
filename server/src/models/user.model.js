import mongoose from "mongoose";
import { getPasswordHash, verifyPassword } from "../utils/password";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["voter", "admin"],
      default: "voter",
    },
    aadharNumber: {
      type: String,
      required: true,
      unique: true,
    },
    isVoted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const savedUser = this;
  if (!savedUser.isModified("password")) return;

  try {
    const hashedPassword = await getPasswordHash(savedUser.password);

    savedUser.password = hashedPassword;
  } catch (error) {
    throw Error("Error in hashing password" + error.message);
  }
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await verifyPassword({password: userPassword, hash: this.password});
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

export default User;
