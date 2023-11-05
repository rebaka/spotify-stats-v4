function ProfileComponent({profileData}) {

    // const CLIENT_ID  = process.env.REACT_APP_CLIENT_ID; 
    // const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET; 

    // const [userData, setUserData] = useState(null);

    return (
        <div className="bg-slate-700 h-[650px] w-[950px] rounded-lg mt-4">
            {profileData ? (
                <div>
                    <img src={profileData.images[profileData.images.length-1]?.url} className="rounded-full"/> 
                    <div className="text-white"> {profileData.display_name}</div>
                </div>
            ) : (
                <div>Loading Profile data...</div>
            )}
        </div>

        
    )
}

export default ProfileComponent;