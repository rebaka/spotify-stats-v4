import React from 'react';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// const CLIENT_ID  = process.env.REACT_APP_CLIENT_ID; 
// const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; 

function ButtonComponent({ onClick }: ButtonProps) {
  return (
    <button
      className="bg-slate-600 hover:bg-slate-700 text-white text-md font-bold py-4 px-8 rounded-lg"
      onClick={onClick}
    >
      Authorize Spotify Account
    </button>
  );
}

export default ButtonComponent;