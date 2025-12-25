import User from "../models/user.model.js";

import { signToken } from "../utils/jwt.js";

/* ======================
   GET ALL USERS (ADMIN)
====================== */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("_id email role createdAt");

    if (!users.length) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/* ======================
   REGISTER USER
====================== */
export const addUser = async (req, res) => {
  try {
    const { password, aadharNumber, age, email } = req.body;

    if (!password || !aadharNumber) {
      return res.status(400).json({
        success: false,
        message: "Password and aadharNumber are required",
      });
    }

    if (age < 18) {
      return res.status(400).json({
        success: false,
        message: "User must be at least 18 years old",
      });
    }

    if (await User.findOne({ email })) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    if (await User.findOne({ aadharNumber })) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error("Error in addUser:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

/* ======================
   LOGIN USER
====================== */
export const loginUser = async (req, res) => {
  try {
    const { aadharNumber, password } = req.body;

    if (!aadharNumber || !password) {
      return res.status(400).json({
        success: false,
        message: "Aadhar Number and Password are required",
      });
    }

    const user = await User.findOne({ aadharNumber }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = signToken({
      // id: user._id,
      // role: user.role,
      // user: {
      id: user._id,
      role: user.role,
      name: user.name,
      email: user.email,
      age: user.age,
      // },
    });

    // // ✅ HTTP-only cookie (recommended)
    res.cookie("token", token, {
      httpOnly: true,
      // sameSite: "none", // ✅ REQUIRED for localhost cross-origin
      secure: false, // true in production (HTTPS)
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      userId: user._id,
      // optional if frontend needs it
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/* ======================
   USER PROFILE
====================== */
export const userProfile = async (req, res) => {
  try {
    res.json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/* ======================
   LOGOUT 
====================== */
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      // sameSite: "none", // ✅ REQUIRED for localhost cross-origin
      secure: false, // true in production (HTTPS)
    });

    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
