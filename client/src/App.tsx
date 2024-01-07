import { useState, useEffect } from 'react';
import ButtonComponent from './Components/ButtonComponent.tsx';
import ProfileComponent from './Components/ProfileComponent.tsx';
import './index.css';
import InfoComponent from './Components/InfoComponent.tsx';
import UseInfoComponent from './Components/UseInfoComponent.tsx';

function App() {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; 
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET; 
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI; 
  const scopes = 'user-read-private user-read-email playlist-modify-public playlist-modify-private user-library-read user-top-read user-read-recently-played';
  const [code, setCode] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [profileData, setProfileData] = useState(null);
  const [topArtistsData, setTopArtistsData] = useState(null);
  const [topTracksData, setTopTracksData] = useState(null);
  const [recentlyPlayedData, setRecentlyPlayedData] = useState(null);

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
      console.log('Redirect URI:', REDIRECT_URI);
  
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
  
      if (!response.ok) {
        console.error('Error:', response.status, response.statusText);
        return;
      }
  
      const data = await response.json();
      setAccessToken(data.access_token);
      setShowProfile(true);
      console.log('Access Token:', data.access_token);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //To get the access token and set it if it's already in URL otherwise get the code after authorizing app
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    const accessToken = params.get('access_token');
    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      if (code) {
        setCode(code);
      }
    }
  }, []);

  //Call to get access token
  useEffect(() => {
    if (code !== "") {
      getAccessToken(code);
    }
  }, [code]);

  //Call to get user profile information
  useEffect(() => {
    if (accessToken) {
      getMyProfile(accessToken);
      getTopArtists(accessToken);
      getTopTracks(accessToken);
      getRecentlyPlayed(accessToken);
    }
  }, [accessToken]);

  const getMyProfile = async (accessToken) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      console.log('User Profile:', data);
      setProfileData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getTopArtists = async (accessToken) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/top/artists', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      console.log('Top Artists:', data);
      setTopArtistsData(data);
      
    } catch(error) {
      console.error('Error:', error);
    }
  }

  const getTopTracks = async (accessToken) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      console.log('Top Tracks:', data);
      setTopTracksData(data);
    } catch(error) {
      console.error('Error:', error);
    }
  }

  const getRecentlyPlayed = async (accessToken) => {
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      const data = await response.json();
      console.log('Recently Played:', data);
      setRecentlyPlayedData(data);
    } catch(error) {
      console.error('Error:', error);
    }
  }
 
  const {isOpen, toggle} = UseInfoComponent();

  return (
    
    <div className='bg-slate-900 text-white min-h-screen flex justify-center items-center'>
      <div className='text-3xl font-bold text-slate-400'>
        <header className="fixed top-0 left-0 text-3xl font-bold text-white mb-4 mt-4 ml-8">
          <span>SPOTIFY STATS</span>
          <button className='fixed top-0 right-0 p-2 mb-4 mt-4 mr-8' onClick={toggle}>
            info
          </button>
        </header>
        <div style={{ position: 'relative', zIndex: 50 }}>
          {isOpen && <InfoComponent isOpen={isOpen} onClose={toggle} />}
        </div>
        <div>
          {!accessToken && <ButtonComponent onClick={handleClick} clientId={CLIENT_ID} clientSecret={CLIENT_SECRET} redirectUri={REDIRECT_URI} />}
        </div>
        {showProfile && <ProfileComponent profileData={profileData} topArtistsData={topArtistsData} topTracksData={topTracksData} recentlyPlayedData={recentlyPlayedData}/>}
      </div>
    </div>
  )
}

export default App;

