import React from 'react';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    clientId: string;
    clientSecret: string; 
    redirectUri: string; 
}

function ButtonComponent({ onClick }: ButtonProps) {
  return (
    <button
      className="bg-slate-600 hover:bg-slate-700 text-white text-md font-bold py-4 px-8 rounded-lg"
      // onClick={onClick}
      onClick={onClick}
    >
      Authorize Spotify Account
    </button>
  );
}

export default ButtonComponent;