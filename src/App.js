import React, { useEffect } from 'react';
require('dotenv').config();

const axios = require('axios');
const token = 

function App() {
    useEffect(() => {
        LogRedact();
    }, [])
    
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redact</h1>
        <p>
        </p>
      </header>
    </div>
  );
}

function LogRedact() {
    axios.get(`https://discordapp.com/api/users/@me/guilds`, {
        headers: {
            "Authorization": token,
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
