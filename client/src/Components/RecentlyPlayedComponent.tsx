import React from 'react';
interface RecentlyPlayedComponent {
    recentlyPlayedData: {
        id: string;
        playedAt: string;
        track: {
            album: {
                images: { url: string }[];
            }
            name: string;
            artists: { name: string }[];
        };
    };
}

function RecentlyPlayedComponent({recentlyPlayedData}: RecentlyPlayedComponent) {
    console.log('recentlyPlayedData:', recentlyPlayedData);
    return(
        <div className='h-[130px] w-[900px] bg-black rounded-lg mb-4 p-4 ml-4 mr-4 flex items-center'>
            <img
                src={recentlyPlayedData.track.album.images[0]?.url || 'default-image-url'} 
                alt={recentlyPlayedData.track.name} 
                className="h-20 w-20 object-cover mr-2 self-center" 
            />

            <div className="flex flex-col ml-2">
                <span className='text-white'>{recentlyPlayedData.track.name}</span>
                <div className='flex flex-wrap'>
                    {recentlyPlayedData.track.artists.map((artist, index) => (
                        <span key={index} className='text-white mr-2 text-base text-xl'>{artist.name}</span>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default RecentlyPlayedComponent;