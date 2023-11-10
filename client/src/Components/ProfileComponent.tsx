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
                <h2 className="text-white p-2 mt-4">TOP ARTISTS</h2>
                {topArtistsData && (
                <div className="flex mt-4 mb-4 overflow-auto">
                    {/* <div className="bg-slate-600 rounded-lg mt-8 p-3 mr-5"> */}
                        <ul>
                            {topArtistsData.items.slice(0, 20).map((artist) => (
                                <TopArtistsComponent key={artist.id} topArtistsData={artist} />
                            ))}
                        </ul>
                    {/* </div> */}

                    {/* <div className="bg-slate-600 rounded-lg mt-8 p-3 mr-5">
                        <h2 className="text-white p-2">TOP TRACKS</h2>
                        <ul>
                            {topTracksData?.items?.slice(0, 5).map((track) => (
                            <li key={track.id} className="text-white flex items-center mb-2 text-base">
                            <img
                                src={track.album.images[0]?.url || 'default-image-url'} 
                                alt={track.name} 
                                className="h-8 w-8 object-cover mr-2" 
                            />
                                {track.name}
                            </li>
                            ))}
                        </ul>
                    </div>  */}

                    {/* <div className="bg-slate-600 rounded-lg mt-8 p-3 mr-5">

                    </div> */}

                    {/* <button></button> */}
                </div>
                )}
            </div>
        </div>
    );
};

export default ProfileComponent;