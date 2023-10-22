import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

const app = express();
const querystring = require('querystring');
const PORT = process.env.PORT || 3002;

dotenv.config();


const CLIENT_ID = process.env.VITE_CLIENT_ID; 
// const CLIENT_SECRET = process.env.VITE_CLIENT_SECRET; 
const REDIRECT_URI = process.env.VITE_REDIRECT_URI; 
const scopes = 'user-read-private user-read-email playlist-modify-public playlist-modify-private user-library-read'; // Define the scopes you need

const generateRandomString = (length: number) => {
  let text = ''; 
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text; 
}

const stateKey = 'spotify_auth_state';

app.get('/', (req, res) => {
  res.send('Server for Spotify Stats running!');
});

app.get('/login', (req, res) => {
    console.log(`Redirecting to Spotify authorization...`);

    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    const params = querystring.stringify({
      client_id: CLIENT_ID, 
      response_type: 'code', 
      redirect_uri: REDIRECT_URI, 
      state: state, 
      scope: scopes,
    });

    res.redirect(`https://accounts.spotify.com/authorize?${params}`);
});

app.get('/callback', (req, res) => {
  res.send('Callback');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
