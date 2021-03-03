import React, { useEffect, useState } from 'react';
import Login from './Components/Login'
import Profile from './Components/Profile'
import './App.css'
require('dotenv').config();

const axios = require('axios');

// "https://cdn.discordapp.com/avatars/816462587548925972/dd5ce4b8ba938d5a2e0455420d2d424c.png?size=256"


function App() {
    
    console.log(`.env test key: ${process.env.REACT_APP_TOKEN}`);
    // eslint-disable-next-line no-unused-vars
    const  [userSignedIn, setUserSignedIn] = useState(false);
    useEffect(() => {
        GetCurrentUser();
    }, [])
    if (userSignedIn){
        return (
            <div className="App">
              <header className="App-header">Redact</header>
              <Profile></Profile>
            </div>
          );
    }else{
        return(
            <div className="App">
              <header className="App-header"><img src='https://www.redact.dev/static/media/logo.aebc0966.svg' alt='logo'></img></header>
              <Login></Login>
            </div>
            
        );
    }
  
}

function GetCurrentUser() {
    axios.get(`https://discordapp.com/api/users/@me`, {
        headers: {
            "Authorization": process.env.REACT_APP_TOKEN,
            "Content-Type": "application/x-www-form-urlencoded" 
        }
    })
    .then(function(response) {
        console.log("USER: ", response.data);
    })
    .catch(function(err) {
        console.log(err);
    });
}

export default App;
