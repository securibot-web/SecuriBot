const config = require('./config.js');
const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () => {
  bot.user.setGame('Je sais pas trop')
});

bot.login(token);
