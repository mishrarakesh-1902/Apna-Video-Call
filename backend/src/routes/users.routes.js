import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/user.controller.js";



const router = Router();

router.route("/login").post(login)
router.route("/register").post(register)
router.route("/add_to_activity").post(addToHistory)
router.route("/get_all_activity").get(getUserHistory)

export default router;
// Routes: POST /register, POST /login, GET /profile, PUT /update, DELETE /account

// POST /login: Returns { token, refreshToken, user: { id, name, email } }

// Middleware chain: cors -> helmet -> rateLimit -> auth -> validation -> controller

// POST /register: { name, email, password } -> { user, token, message: 'Created' }

// Protected: All /profile, /history, /meeting routes require valid JWT in header

// POST /upload-avatar: Multer middleware, S3 upload, update user.avatar in DB

// API Version: All routes prefixed with /api/v1 for backward compatibility
