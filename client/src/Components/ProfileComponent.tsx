import UserProfileComponent from './UserProfileComponent.tsx';
import TopArtistsComponent from './TopArtistsComponent.tsx';
import TopTracksComponent from './TopTracksComponent.tsx';
import { useState } from 'react';
import RecentlyPlayedComponent from './RecentlyPlayedComponent.tsx';

function ProfileComponent({profileData, topArtistsData, topTracksData, recentlyPlayedData}) {
    const [displayMode, setDisplayMode] = useState('tracks');

    const handleButtonClick = (mode) => {
        setDisplayMode(mode)
    };

    return (
        <div className='flex flex-hor mt-20 sticky top-0 z-10' style={{ alignItems: 'flex-start' }}>
            {profileData && (
                <div className='flex'>
                    <div className="mr-4">
                        <UserProfileComponent profileData={profileData} />
                    </div>
                </div>
            )}

            {/* for tabs */}
            <div className='flex flex-col'>
                <div className='flex mt-4 ml-2 border-b border-gray-200 dark:border-gray-700'>
                    <nav className='flex space-x-2' aria-label='Tabs' role='tablist'>
                        <button onClick={() => handleButtonClick('tracks')} type='button' className='hs-tab-active:bg-slate-700 hs-tab-active:border-b-transparent
                        hs-tab-active:text-white dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 
                        dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-slate-700 text-lg font-large text-center 
                        border text-gray-500 rounded-t-lg hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-700 dark:border-gray-700 
                        dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active' id='tab-top-tracks-item' data-hs-tab='tab-top-tracks-tab'
                        aria-controls='card-type-tab-1' role='tab'>
                            TOP TRACKS
                        </button>

                        <button onClick={() => handleButtonClick('artists')} type='button' className='hs-tab-active:bg-slate-700 hs-tab-active:border-b-transparent
                        hs-tab-active:text-pink-500 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 
                        dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-slate-700 text-lg font-large text-center 
                        border text-gray-500 rounded-t-lg hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-700 dark:border-gray-700 
                        dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active' id='tab-top-artists-item' data-hs-tab='tab-top-artists-tab'
                        aria-controls='card-type-tab-2' role='tab'>
                            TOP ARTISTS
                        </button>

                        <button onClick={() => handleButtonClick('recently-played')} type='button' className='hs-tab-active:bg-slate-700 hs-tab-active:border-b-transparent
                        hs-tab-active:text-pink-500 dark:hs-tab-active:bg-gray-800 dark:hs-tab-active:border-b-gray-800 
                        dark:hs-tab-active:text-white -mb-px py-3 px-4 inline-flex items-center gap-x-2 bg-slate-700 text-lg font-large text-center 
                        border text-gray-500 rounded-t-lg hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-700 dark:border-gray-700 
                        dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 active' id='tab-recently-played-item' data-hs-tab='tab-recently-played-tab'
                        aria-controls='card-type-tab-2' role='tab'>
                            RECENTLY PLAYED
                        </button>
                    </nav>
                </div>

                <div className='bg-slate-700 h-[750px] w-[950px] rounded-lg flex flex-col items-center'>
                    {displayMode === 'tracks' && topTracksData && (
                        <div className='overflow-auto'>
                            <h2 className='sticky top-0 z-10 bg-slate-700 p-2 text-center'>TOP TRACKS</h2>
                            <div className='relative' style={{ paddingTop: '0.45rem' }}>
                                <ul>
                                {topTracksData.items.slice(0, 10).map((track) => (
                                    <TopTracksComponent key={track.id} topTracksData={track} />
                                ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {displayMode === 'artists' && topArtistsData && (
                        <div className='overflow-auto'>
                            <h2 className='sticky top-0 z-10 bg-slate-700 p-2 text-center'>TOP ARTISTS</h2>
                            <div className='relative' style={{ paddingTop: '0.45rem' }}>
                                <ul>
                                    {topArtistsData.items.slice(0, 10).map((artist) => (
                                        <TopArtistsComponent key={artist.id} topArtistsData={artist} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {displayMode === 'recently-played' && recentlyPlayedData && (
                        <div className='overflow-auto'>
                            <h2 className='sticky top-0 z-10 bg-slate-700 p-2 text-center'>RECENTLY PLAYED</h2>
                            <div className='relative' style={{ paddingTop: '0.45rem' }}>
                                <ul>
                                    {recentlyPlayedData.items.slice(0, 10).map((track) => (
                                        <RecentlyPlayedComponent key={track.id} recentlyPlayedData={track} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}  
                </div>

                <div style={{ paddingBottom: '2rem' }}></div>
            </div>  
        </div>
    );
};

export default ProfileComponent;