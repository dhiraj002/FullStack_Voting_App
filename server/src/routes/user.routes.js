import express from "express";
import { getAllUsers, addUser } from "../controllers/user.controller.js";

const router = express.Router();

// Example route to get all users
router.get("/", getAllUsers);
router.post("/signup", addUser);

export default router;
