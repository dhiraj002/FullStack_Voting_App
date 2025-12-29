import express from "express";
import {
  getAllUsers,
  addUser,
  loginUser,
  userProfile,
  logoutUser,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Example route to get all users
router.get("/", getAllUsers);
router.post("/signup", addUser);
router.post("/login", loginUser);
router.get("/profile", authenticate, userProfile);
router.post("/logout", authenticate, logoutUser);

export default router;
