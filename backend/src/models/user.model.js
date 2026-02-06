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
