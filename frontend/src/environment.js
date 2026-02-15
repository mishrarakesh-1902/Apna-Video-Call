let IS_PROD = true;
const server = IS_PROD ?
    "https://apnacollegebackend.onrender.com" :

    "http://localhost:8000"


export default server;
// Env vars: REACT_APP_API_URL, REACT_APP_SOCKET_URL, REACT_APP_ENV

// API_BASE: dev=http://localhost:5000, prod=https://api.apnavideocall.com

// SOCKET_URL: dev=ws://localhost:5000, prod=wss://socket.apnavideocall.com

// DEV_MODE: Enable verbose logging, disable caching, show debug overlay tools

// PROD: API at apnavideocall.com, CDN for static assets, WebSocket with SSL

// Feature Flags: ENABLE_RECORDING, ENABLE_CHAT, ENABLE_WHITEBOARD, ENABLE_POLLS
