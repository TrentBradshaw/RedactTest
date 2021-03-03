/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
const axios = require('axios');

function Filter({currentUser,token}) {
    const [resultsArray, setResultsArray] = useState([]);
    const [channelsArray, setChannelsArray] = useState([]);
    const [dmsArray, setDmsArray] = useState([]);

    const getChannelsUrl = 'https://discordapp.com/api/users/@me/channels'
    const getMessagesUrl = 'https://discordapp.com/api/users/@me/channels/{channel.id}/messages'
    const deleteMessageUrl = 'https://discordapp.com/api/users/@me/channels/{channel.id}/messages/{message.id}'
    function filterMessages(token) {
        axios.get(getChannelsUrl, {
            headers: {
                "Authorization": token,
                "Content-Type": "application/x-www-form-urlencoded" 
            }
        })
        .then(function(response) {
            console.log(response.data)
        })
        .catch(function(err) {
            console.log(err);
        });
    }
    useEffect(() => {
        if(token)
            filterMessages(token);
    }, [token])
    return (
        <div>
             <input></input>
        </div>
    )
}

export default Filter
