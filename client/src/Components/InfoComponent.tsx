import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

interface InfoComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoComponent: React.FC<InfoComponentProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"

          ></div>

          <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`} >
            <div className='bg-slate-800 text-white p-16 rounded-lg fixed z-50 '>
              <Button className='absolute -left-14 -top-12' onClick={onClose}>
                <CloseIcon className='text-white' fontSize='large'/>
              </Button>
              <p className='text-2xl font-bold mb-4'>SPOTIFY STATS helps to keep track of your most played artists, tracks, and recently played songs. </p>
              <p className='text-xl font-bold mb-4'>Check out the Github link below:</p>
              <a href={'https://github.com/rebaka/spotify-stats-v4'} target="_blank" rel="noopener noreferrer">
                <Button>
                  <GitHubIcon className='text-white' fontSize='large'/>
                </Button>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoComponent;
