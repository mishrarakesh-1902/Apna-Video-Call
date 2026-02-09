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
