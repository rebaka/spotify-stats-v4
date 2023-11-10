import React from 'react';

interface TopArtistsComponentProps {
    topArtistsData: {
        id: string;
        images: { url: string }[];
        name: string;
    };
}

function TopArtistsComponent({topArtistsData}: TopArtistsComponentProps) {
    // console.log(profileData);
    return(
        // <li key={topArtistsData.id} className="text-white flex items-center mb-2 text-base">
        //     <img
        //         src={topArtistsData.images[0]?.url || 'default-image-url'}
        //         alt={topArtistsData.name}
        //         className="h-8 w-8 rounded-full mr-2"
        //     />
        //     {topArtistsData.name}
        // </li>
        <div className="bg-black rounded-lg mb-4 p-4 w-[900px]">
        <img
          src={topArtistsData.images[0]?.url || 'default-image-url'}
          alt={topArtistsData.name}
          className="h-8 w-8 rounded-full mr-2"
        />
        <span className="text-white">{topArtistsData.name}</span>
      </div>
    );
}

export default TopArtistsComponent;