import React, { useState, useEffect } from 'react';
import ButtonComponent from './Components/ButtonComponent.tsx';
import ProfileComponent from './Components/ProfileComponent.tsx';
import './index.css';

function App() {

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; 
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET; 
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI; 
  const scopes = 'user-read-private user-read-email playlist-modify-public playlist-modify-private user-library-read';

  const [code, setCode] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const generateRandomString = (length: number) => {
    let text = ''; 
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text; 
  }

  const redirectToAuth = () => {
    const state = generateRandomString(16);
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: 'code',
      redirect_uri: REDIRECT_URI, 
      state,
      scope: scopes,
    });

    localStorage.setItem('spotify_auth_state', state);

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
  }

  const handleClick = async () => {
    redirectToAuth();
  }

  const getAccessToken = async (code: string) => {
    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: REDIRECT_URI,
        }).toString(),
      });
      const data = await response.json();
      setAccessToken(data.access_token);
      console.log('Access Token:', data.access_token);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const token = params.get('access_token');
    if (token) {
      setAccessToken(token);
    } else {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        setCode(code);
      }
    }
  }, []);

  useEffect(() => {
    if (code !== "") {
      getAccessToken(code);
    }
  }, [code]);

  const getMyProfile = async (accessToken) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      console.log('User Profile:', data);
      return data; // This will contain information about the authenticated user
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen flex justify-center items-center">
      <div className="text-3xl font-bold text-slate-400">
        SPOTIFY STATS
        <div>
          <ButtonComponent onClick={handleClick} clientId={CLIENT_ID} clientSecret={CLIENT_SECRET} redirectUri={REDIRECT_URI}/>
        </div>
        {showProfile && <ProfileComponent/>}
      </div>
    </div>
  )
}

export default App;

