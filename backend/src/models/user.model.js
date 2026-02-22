import mongoose, { Schema } from "mongoose";

const userScheme = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: { type: String }
    }
)

const User = mongoose.model("User", userScheme);

export { User };
// Validation: email must be unique, password min 8 chars with special characters

// Security: Passwords hashed with bcrypt (12 salt rounds) before storage

// Email: Mongoose validator with regex, unique index, lowercase transform

// Profile: { avatar: String, bio: String, timezone: String, notifications: Boolean }

// Verification: { isVerified: Boolean, verifyToken: String, verifyExpires: Date }

// Avatar: S3 URL stored, default generated from initials, 5MB max upload size

// Preferences: { theme: 'light'|'dark', language: String, emailNotifications: Boolean }

// OAuth: { googleId: String, provider: String, providerId: String } for social login
