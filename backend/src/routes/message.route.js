import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";

// Function to validate and log warnings for full URLs
const validateRoutePath = (path) => {
  const fullUrlPattern = /^https?:\/\/.*$/; // Regex to match full URLs
  if (fullUrlPattern.test(path)) {
    console.warn(`Warning: You are using a full URL path "${path}". This might cause issues. Use a relative path instead.`);
  }
};

const router = express.Router();

// Correct relative paths for your routes
const userPath = "/users";
const messagePath = "/:id";
const sendMessagePath = "/send/:id";

// Validate paths
validateRoutePath(userPath);
validateRoutePath(messagePath);
validateRoutePath(sendMessagePath);

// Your routes with correct relative paths
router.get(userPath, protectRoute, getUsersForSidebar);  // Get users for sidebar
router.get(messagePath, protectRoute, getMessages);  // Get messages by id
router.post(sendMessagePath, protectRoute, sendMessage);  // Send a message to a user

export default router;
