import UserProfileComponent from './UserProfileComponent.tsx';
import TopArtistsComponent from './TopArtistsComponent.tsx';
import TopTracksComponent from './TopTracksComponent.tsx';
import { useState } from 'react';

function ProfileComponent({profileData, topArtistsData, topTracksData}) {
    const [displayMode, setDisplayMode] = useState('tracks');

    const handleButtonClick = (mode) => {
        setDisplayMode(mode)
    };

    return (
        <div className='flex flex-hor items-center' style={{ alignItems: 'flex-start' }}>
            {profileData && (
                <div className='flex'>
                    <div className="mr-4">
                        <UserProfileComponent profileData={profileData} />
                    </div>
                </div>
            )}

            {/* for tabs */}
            <div className='flex flex-col items-center'>
                <div className='flex mt-8 border-b border-gray-200 dark:border-gray-700'>
                    <nav className='flex space-x-2' aria-label='Tabs' role='tablist'>
                        <button onClick={() => handleButtonClick('tracks')} type='button' className='hs-tab-active:bg-white hs-tab-active:border-b-transparent
                        hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 
                        dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-lg font-large text-center 
                        border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-gray-700 
                        dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active' id='tab-top-tracks-item' data-hs-tab='tab-top-tracks-tab'
                        aria-controls='card-type-tab-1' role='tab'>
                            Top Tracks
                        </button>

                        <button onClick={() => handleButtonClick('artists')} type='button' className='hs-tab-active:bg-white hs-tab-active:border-b-transparent
                        hs-tab-active:text-blue-600 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 
                        dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-gray-50 text-lg font-large text-center 
                        border text-gray-500 rounded-t-lg hover:text-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-gray-700 
                        dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active' id='tab-top-artists-item' data-hs-tab='tab-top-artists-tab'
                        aria-controls='card-type-tab-2' role='tab'>
                            Top Tracks
                        </button>
                    </nav>
                </div>

                <div className='bg-slate-700 h-[750px] w-[950px] rounded-lg mt-4 flex flex-col items-center'>
                    {/* <div className='flex mt-8'>
                        <button onClick={() => handleButtonClick('tracks')} className='mr-2'>
                            TOP TRACKS
                        </button>
                        <button onClick={() => handleButtonClick('artists')} className='mr-2'>
                            TOP ARTISTS
                        </button>
                    </div> */}

                    {displayMode === 'tracks' && topTracksData && (
                        <div className='overflow-auto'>
                            <h2 className="text-white p-2">TOP TRACKS</h2>
                            <ul>
                            {topTracksData.items.slice(0, 10).map((track) => (
                                <TopTracksComponent key={track.id} topTracksData={track} />
                            ))}
                            </ul>
                        </div>
                    )}

                    {displayMode === 'artists' && topArtistsData && (
                        <div className='overflow-auto'>
                            <h2 className="text-white p-2">TOP ARTISTS</h2>
                            <ul>
                            {topArtistsData.items.slice(0, 10).map((artist) => (
                                <TopArtistsComponent key={artist.id} topArtistsData={artist} />
                            ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            
        </div>
    );
};

export default ProfileComponent;