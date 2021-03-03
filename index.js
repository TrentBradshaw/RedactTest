const discord = require('discord.js');
const client = new discord.Client();

email  = process.env.email
password = process.env.password 
token = process.env.token

const headers = {
    'Token': token
}
axios.get(`https://discordapp.com/api/v6/users/@me`, {
        headers: {
            "Authorization": `Bearer {token}`,
            "Content-Type": "application/x-www-form-urlencoded" 
        }
    })
    .then(function(response) {
        console.log("USER: ", response.data);
    })
    .catch(function(err) {
        console.log(err);
    });
axios.get(`https://discordapp.com/api/channels/${msg.channel.id}/messages`, headers)
                .then(response => {
                    console.log(response);
                }).catch(err => {
                    console.log(err);
});



