import express from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

require('dotenv').config({ path: '../.env' });

const CLIENT_ID  = process.env.REACT_APP_CLIENT_ID; 
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; 
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI; 
const scopes = 'user-read-private user-read-email playlist-modify-public playlist-modify-private user-library-read'; // Define the scopes you need

app.get('/', (req, res) => {
  res.send('Hello from Express servers!');
});

// app.get('/login', (req, res) => {
//     console.log(`Redirecting to Spotify authorization...`);
//     res.redirect(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${scopes}`);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
