const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === '!bing') {
    	message.reply('BONG!');
  	}
});

client.on('message'), message => {
    if (message.content === '!youtube') {
        message.reply('http://youtube.com/c/sieze');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
