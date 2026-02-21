import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://rk9608656543_db_user:xQ6yf2B0dyCXmXCv@clusterapna.cobap73.mongodb.net/?retryWrites=true&w=majority&appName=Clusterapna")

    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();
// CORS Configuration: Allow cross-origin requests from frontend application

// Rate Limiting: 100 requests per 15 min per IP for auth, 1000 for general API

// Health Check: GET /health returns { status: 'ok', uptime, timestamp }

// Body Parser: JSON (10mb limit), URL-encoded (extended: true, limit: 10mb)

// Compression: gzip for responses >1kb, ~70% size reduction on JSON responses

// Logging: Morgan 'combined' format in prod, 'dev' format in development mode

// Helmet: Sets security headers - CSP, HSTS, X-Frame-Options, X-XSS-Protection
