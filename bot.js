require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const PREFIX = process.env.PREFIX;
client.login(process.env.BOT_TOKEN);
// Set the bot's "Playing: " status (must be in an event!)

client.on("ready", () => {
})


client.on('ready',() =>{
 console.log(`${client.user.tag} has logged in.`);

});

var a = 5
var b = 6

if (a+b) {
    
}

