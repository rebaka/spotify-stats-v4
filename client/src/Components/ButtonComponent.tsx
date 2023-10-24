import React from 'react';
import axios from 'axios';

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    clientId: string;
    clientSecret: string; 
    redirectUri: string; 
}

// const CLIENT_ID  = process.env.REACT_APP_CLIENT_ID; 
// const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; 

// function ButtonComponent({ onClick }: ButtonProps, clientId: string, clientSecret: string, redirectUri: string) {

//   const handleButtonClick = async () => {
//     try {
//       const response = await axios.get(`/login?clientId=${clientId}&clientSecret=${clientSecret}&redirectUri=${redirectUri}`);
//       console.log(response.data);
//     } catch(error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <button
//       onClick={handleButtonClick}
//       className="bg-slate-600 hover:bg-slate-700 text-white text-md font-bold py-4 px-8 rounded-lg"
//       // onClick={onClick}
//     >
//       Authorize Spotify Account
//     </button>
//   );
// }

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