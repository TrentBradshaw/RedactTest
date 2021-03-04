/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'

const axios = require('axios');

// "https://cdn.discordapp.com/avatars/816462587548925972/dd5ce4b8ba938d5a2e0455420d2d424c.png?size=256"


function App() {
    
    // eslint-disable-next-line no-unused-vars

    // SET USERSIGNEDIN BACK TO FALSE WHEN DONE TESTING
    const  [userSignedIn, setUserSignedIn] = useState(true);
    
    const [currentUser, setCurrentUser] = useState(null);
    
    // DELETE DEFAULT TOKEN WHEN DONE TESTING
    const [token, setToken] = useState("ODE2NDYyNTg3NTQ4OTI1OTcy.YEA1sA.kXXU1Ns8L78_Tz7P59EmlBL9U3A");
    
    useEffect(() => {
        console.log(token)
        function GetCurrentUser() {
            axios.get(`https://discordapp.com/api/v8/users/@me`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/x-www-form-urlencoded" 
                }
            })
            .then(function(response) {
                console.log("USER: ", response.data);
                setCurrentUser(response.data);
            })
            .catch(function(err) {
                console.log(err);
            });
        }
        if(token)
            {
                console.log('token from within' +  token)
                GetCurrentUser(token);
            }
            
    }, [token])
    function handleSetToken(tokenV){
        setToken(tokenV);
    }
    function handleUserSignIn(signedIn, tokenV){
        setUserSignedIn(signedIn);
        setToken(tokenV);
    }
    
    if (userSignedIn){
        return (
            <div className="App">
              <header className="App-header"><img src='https://www.redact.dev/static/media/logo.aebc0966.svg' alt='logo'></img></header>
              <Profile currentUser={currentUser} token={token}></Profile>
            </div>
          );
    }else{
        return(
            <div className="App">
              <header className="App-header"><img src='https://www.redact.dev/static/media/logo.aebc0966.svg' alt='logo'></img></header>
              <Login handleUserSignIn = {handleUserSignIn}></Login>
            </div>
            
        );
    }
  
}



export default App;
