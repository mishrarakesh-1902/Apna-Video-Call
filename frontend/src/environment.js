let IS_PROD = true;
const server = IS_PROD ?
    "https://apnacollegebackend.onrender.com" :

    "http://localhost:8000"


export default server;
// Env vars: REACT_APP_API_URL, REACT_APP_SOCKET_URL, REACT_APP_ENV
