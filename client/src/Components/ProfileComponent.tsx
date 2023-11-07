function ProfileComponent({profileData, topArtistsData, topTracksData}) {

    // const CLIENT_ID  = process.env.REACT_APP_CLIENT_ID; 
    // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; 

    return (
        <div className="bg-slate-700 h-[650px] w-[950px] rounded-lg mt-4 flex flex-col items-center">
            {profileData ? (
                <div className="flex mt-8">
                    <div className='flex-shrink-0 ml-8'>
                        <img src={profileData.images[profileData.images.length-1]?.url} alt="Profile pic" className="h-[150px] w-[150px] rounded-full"/> 
                    </div>
                    <div>
                        <div className="ml-4 mt-8">
                            <div className="text-white"> {profileData.display_name}</div>
                            <div className="text-white text-xl"> {profileData.followers.total} followers</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading Profile data...</div>
            )}

            {topArtistsData && (
            <div className="flex mt-8">
                <div className="bg-slate-600 rounded-lg mt-8 p-3 mr-5">
                <h2 className="text-white p-2">TOP ARTISTS</h2>
                <ul>
                    {topArtistsData.items.slice(0, 5).map((artist) => (
                    <li key={artist.id} className="text-white flex items-center mb-2 text-base">
                        <img
                        src={artist.images[0]?.url || 'default-image-url'} 
                        alt={artist.name} 
                        className="h-8 w-8 rounded-full mr-2"
                        />
                        {artist.name}
                    </li>
                    ))}
                </ul>
                </div>

                {/* Top Tracks */}
                <div className="bg-slate-600 rounded-lg mt-8 p-3 mr-5">
                <h2 className="text-white p-2">TOP TRACKS</h2>
                <ul>
                    {topTracksData.items.slice(0, 5).map((track) => (
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
                </div>
            </div>
            )}
        </div>
    );
};

export default ProfileComponent;