import React from 'react';
interface TopTracksComponentProps {
    topTracksData: {
        id: string;
        album: {
            images: { url: string }[];
        };
        name: string;
        artists: { name: string }[];
    };
}

function TopTracksComponent({topTracksData}: TopTracksComponentProps) {
    console.log('topTracksData:', topTracksData);

    return(
        <div className='h-[130px] w-[900px] bg-black rounded-lg mb-4 p-4 flex items-center'>
            {/* <li key={topTracksData.id} className="text-white flex items-center mb-2 text-base"> */}
                <img
                    src={topTracksData.album.images[0]?.url || 'default-image-url'} 
                    alt={topTracksData.name} 
                    className="h-20 w-20 object-cover mr-2 self-center" 
                />
                <div className="flex flex-col ml-2">
                    <span className='text-white'>{topTracksData.name}</span>
                    <div className='flex flex-wrap'>
                        {topTracksData.artists.map((artist, index) => (
                            <span key={index} className='text-white mr-2 text-base'>{artist.name}</span>
                        ))}
                    </div>
                </div>
            {/* </li> */}
        </div>
    );
}

export default TopTracksComponent;