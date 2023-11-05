import express, { response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}));
const querystring = require('querystring');
const PORT = process.env.PORT || 3002;

dotenv.config();

const CLIENT_ID = process.env.VITE_CLIENT_ID; 
const CLIENT_SECRET = process.env.VITE_CLIENT_SECRET; 
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

app.get('/callback', async (req, res) => {
  const code = req.query.code || null; 

  try {
    const response = await axios({
      method: 'POST', 
      url: 'https://accounts.spotify.com/api/token', 
      data: querystring.stringify({
        grant_type: 'authorization_code', 
        code: code, 
        redirect_uri: REDIRECT_URI, 
        client_id: CLIENT_ID, 
        client_secret: CLIENT_SECRET,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'))
      },
    });

    const {access_token, token_type} = response.data; 
    console.log('Access Token:', access_token);

    res.send({access_token, token_type}); 
  } catch (error) {
    console.error('Error requesting token', error);
    res.status(500).send('Internal server error'); 
  }
});

app.get('/get-user-data', async (req, res) => {
  const accessToken = req.query.access_token || null; 

  if(!accessToken) {
    return res.status(400).send('Bad Request: Missing access token');
  }

  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const userData = response.data; 
    res.send(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
