import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Not authorized, no token" });
  }

  const token = authHeader.split(" ")[1]; // Extract the actual JWT

  try {
    // Verify the token (throws if invalid or expired)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request, exclude password
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    next();
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.status(401).json({ success: false, message: "Not authorized, invalid token" });
  }
};