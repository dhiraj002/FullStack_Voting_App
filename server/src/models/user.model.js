import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
    //generate salt
    const salt = await bcrypt.genSalt(10);

    //hash the password
    const hashedPassword = await bcrypt.hash(savedUser.password, salt);

    savedUser.password = hashedPassword;
  } catch (error) {
    throw Error("Error in hashing password" + error.message);
  }
});

userSchema.methods.comparePassword = function (userPassword) {
  try {
    const isMatch = bcrypt.compare(userPassword, this.password);
    return isMatch;
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

export default User;
