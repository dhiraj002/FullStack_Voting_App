import User from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users.length) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    // next(error); // pass error to global error handler
    res.status(500).json({ error: err.message });
  }
};

export const addUser = async (req, res, next) => {
  try {
    const { password, aadharNumber, age, email } = req.body;

    // Basic validation
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

    // Check if email already exists
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Check for existing user
    const existingUser = await User.findOne({ aadharNumber });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists with this aadharNumber",
      });
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({
      success: true,
      data: newUser,
      message: "User registered successfully",
    });
  } catch (error) {
    // next(error); // pass error to global error handler
    res.status(500).json({ success: false, error: err.message });
  }
};
