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
        <div className="h-[70px] w-[900px] bg-black rounded-lg mb-4 p-4 flex ">
            <img
                src={topArtistsData.images[0]?.url || 'default-image-url'}
                alt={topArtistsData.name}
                className="h-11 w-11 rounded-full mr-2 self-center"
            />
            <span className="text-white flex-grow ml-2">{topArtistsData.name}</span>
      </div>
    );
}

export default TopArtistsComponent;