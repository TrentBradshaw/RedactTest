/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
const axios = require('axios');

function Filter({currentUser,token}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [resultsArray, setResultsArray] = useState([]);
    const [guildsArray, setGuildsArray] = useState([]);
    const [channelsArray, setChannelsArray] = useState([]);
    const [guildsAndChannelsArray, setGuildsAndChannelsArray] = useState([]);
    const [dmsArray, setDmsArray] = useState([])

    const getChannelsUrl = 'https://discordapp.com/api/users/@me/channels'
    const getGuildsUrl =  'https://discordapp.com/api/users/@me/guilds'
    const getMessagesUrl = 'https://discordapp.com/api/users/@me/channels/{channel.id}/messages'
    const deleteMessageUrl = 'https://discordapp.com/api/users/@me/channels/{channel.id}/messages/{message.id}'
    function handleKeywordSearch(){

    }
    function GetMessagesFromChannel(channelId){
        axios.get('https://discordapp.com/api/users/@me/channels/' + channelId + '/messages', {
            headers: {"Authorization": token,
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": " *",
            "Access-Control-Allow-Methods" : "GET, POST, PATCH, PUT, DELETE, OPTIONS",

         }
        })
        .then(function(response) {
            console.log('dms' + response.data)
            //setDmsArray(dmsArray => [...dmsArray, ' ------fill in thing here -----'])
        })
        .catch(function(err) {
            console.log(err);
        });
    }
    useEffect(() => {
        function getGuilds() {
            axios.get(getGuildsUrl, {
                headers: {"Authorization": token, "Content-Type": "application/x-www-form-urlencoded" }
            })
            .then(function(response) {
                console.log(response.data)
                setGuildsArray(response.data)
            })
            .catch(function(err) {
                console.log(err);
            });
        }
        function getChannels() {
            axios.get(getChannelsUrl, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/x-www-form-urlencoded" 
                }
            })
            .then(function(response) {
                console.log(response.data)
                for (let index = 0; index < response.data.length; index++) {
                    GetMessagesFromChannel(response.data[index].id)
                }
                setChannelsArray(response.data)
            })
            .catch(function(err) {
                console.log(err);
            });
        }
        if(token){
            getChannels();
            getGuilds();
        }
            
    }, [token])
    return (
        <div style={{textAlign:'center'}}>
            <h2>Please enter a keyword</h2>
             <input></input>
             <button>Search</button>
        </div>
    )
}

export default Filter
