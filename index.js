const discord = require('discord.js');
const client = new discord.Client();
 
client.once('ready', () => {
	console.log('Ready!');
});

email  = process.env.email
password = process.env.password 
token = process.env.token

