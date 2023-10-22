import React, { useState, useEffect } from 'react';
import ButtonComponent from './Components/ButtonComponent.tsx';
import ProfileComponent from './Components/ProfileComponent.tsx';

import './index.css';
function App() {
  
  const [showProfile, setShowProfile] = useState(false);

  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; 
  const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET; 
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI; 
  // const scopes = "user-read-private user-read-email playlist-modify-public playlist-modify-private user-library-read";
  
  const handleClick = () => {
    setShowProfile(true);
    console.log(CLIENT_ID);
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen flex justify-center items-center">
      <div className="text-3xl font-bold text-slate-400">
        SPOTIFY STATS
        <div>
          {/* <ButtonComponent onClick={handleClick} /> */}
          <ButtonComponent onClick={handleClick} />
        </div>
        {showProfile && <ProfileComponent/>}
      </div>
    </div>
  )
}

export default App
