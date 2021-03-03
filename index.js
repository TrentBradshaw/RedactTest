const discord = require('discord.js');
const client = new discord.Client();
 
client.once('ready', () => {
	console.log('Ready!');
});
email  = process.env.email
password = process.env.password
//server = discord.Server(id='816461543113359380')

client.on('message', message => {
	console.log(message.content);
});

client.login(email, password)
//client.run(email, password)
/*
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client = discord.Client()



client.on(
    'ready', () => {
        print('Logged in as')
        print(client.user.name)
        print(client.user.id)
        print('------')
        print('get all channel a client belong to ')
    })
    

*/