const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const PREFIX = "c!"

client.on('ready', () => {
    client.user.setActivity("Use c!help", { type: "PLAYING"})
    console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', (msg) => {

if (msg.content.startsWith (PREFIX + "hello")) {
    msg.channel.send("Hehe, Hello there Trainer! Have a good day!~ ♪");
    
    }

});

client.login(auth.token);
