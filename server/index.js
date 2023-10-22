"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3002;
require('dotenv').config({ path: '../.env' });
// const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; 
// const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET; 
// const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI; 
const scopes = 'user-read-private user-read-email playlist-modify-public playlist-modify-private user-library-read'; // Define the scopes you need
app.get('/', (req, res) => {
    res.send('Hello from Express servers!');
});
app.get('/login', (req, res) => {
    console.log(`Redirecting to Spotify authorization...`);
    // console.log(`Redirect URI: ${REDIRECT_URI}`); // Add this line for debugging
    // res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
