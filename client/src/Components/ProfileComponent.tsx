import UserProfileComponent from './UserProfileComponent.tsx';
import TopArtistsComponent from './TopArtistsComponent.tsx';
import TopTracksComponent from './TopTracksComponent.tsx';

function ProfileComponent({profileData, topArtistsData, topTracksData}) {
    return (
        <div className='flex flex-hor items-center' style={{ alignItems: 'flex-start' }}>
            {profileData && (
                <div className='flex'>
                    <div className="mr-4">
                        <UserProfileComponent profileData={profileData} />
                    </div>
                </div>
            )}

            <div className="bg-slate-700 h-[750px] w-[950px] rounded-lg mt-4 flex flex-col items-center ">
                {/* <h2 className="text-white p-2 mt-4">TOP ARTISTS</h2> */}
                <h2 className="text-white p-2 mt-4">TOP TRACKS</h2>
                {topArtistsData && (
                <div className="flex mt-4 mb-4 overflow-auto">
                    {/* <ul>
                        {topArtistsData.items.slice(0, 20).map((artist) => (
                            <TopArtistsComponent key={artist.id} topArtistsData={artist} />
                        ))}
                    </ul> */}

                    <ul>
                        {topTracksData?.items?.slice(0, 20).map((track) => (
                            <TopTracksComponent key={track.id} topTracksData={track}/>
                        ))}
                    </ul>

                    {/* <div className="bg-slate-600 rounded-lg mt-8 p-3 mr-5">

                    </div> */}

                    {/* <button></button> */}
                </div>
                )}
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Top Artists</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Top Tracks</button>
        </div>
    );
};

export default ProfileComponent;