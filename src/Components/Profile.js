import Filter from '../Components/Filter';

function Profile({currentUser, token}) {
    if(currentUser){
        return(
            <div className='mainContainerC'>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <img className='avatar' 
                        src={"https://cdn.discordapp.com/avatars/" + currentUser.id + "/" + currentUser.avatar + ".png"} 
                        alt='avatar'>
                    </img>
                    <div style={{display:'flex', flexDirection:'column', marginLeft:'10%'}}>
                        <h2 className="medText">{currentUser.username}</h2>
                        <h2 className="medText" >{currentUser.email}</h2>
                    </div>
                </div>
                <div>
                    {<Filter currentUser={currentUser} token={token}></Filter>}
                </div>
            </div>
        )
    }else{
        return(<div></div>)
    }
    
}

export default Profile
