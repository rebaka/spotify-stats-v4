import React from 'react';

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
            onClick={onClose}
          ></div>

          <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'visible' : 'invisible'}`} onClick={onClose}>
            <div className='bg-slate-800 text-white p-12 rounded-lg fixed z-50' onClick={(e) => e.stopPropagation()}>
              <p className='text-xl font-bold mb-4 h-50 w-45'>SPOTIFY STATS helps to keep track of your most played artists, tracks, and recently played songs. </p>
              <p className='text-gray-1000'>Click outside to close</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoComponent;
