import React from 'react';
interface TopArtistsComponentProps {
    topArtistsData: {
        id: string;
        images: { url: string }[];
        name: string;
    };
}

function TopArtistsComponent({topArtistsData}: TopArtistsComponentProps) {
    return(
        <div className='h-[75px] w-[900px] bg-black rounded-lg mb-4 p-4 ml-4 mr-4 flex items-center'>
            <img
                src={topArtistsData.images[0]?.url || 'default-image-url'}
                alt={topArtistsData.name}
                className="h-12 w-12 rounded-full mr-2 self-center"
            />
            <span className="text-white flex-grow ml-2">{topArtistsData.name}</span>
      </div>
    );
}

export default TopArtistsComponent;