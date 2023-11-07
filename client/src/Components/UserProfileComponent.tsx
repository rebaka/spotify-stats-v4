function UserProfileComponent({profileData}) {
    // console.log(profileData);
    return(
        <div className="bg-slate-700 h-[180px] w-[450px] mt-4 rounded-lg flex justify-center items-center">
            {profileData ? (
                <div className="flex">
                    <div className='flex-shrink-0 '>
                        <img src={profileData.images[profileData.images.length-1]?.url} alt="Profile pic" className="h-[120px] w-[120px] rounded-full"/> 
                    </div>
                    <div>
                        <div className="ml-5 mt-8">
                            <div className="text-white overflow-hidden whitespace-nowrap w-[200px]"> {profileData.display_name}</div>
                            <div className="text-white text-xl"> {profileData.followers.total} followers</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Loading Profile data...</div>
            )}
        </div>
    )
}

export default UserProfileComponent;