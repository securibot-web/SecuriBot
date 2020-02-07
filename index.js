const config = require('./config.js');
const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () => {
  bot.user.setGame('Je sais pas trop')
  bot.on("message", async message => {
    if (
      message.author.bot
      || message.channel.type === "dm"
      || message.content.indexOf(config.prefix) !== 0
    ) return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let command = commands.getCommand(cmd.slice(config.prefix.length));
    if (command) command.run(bot, message, args);
  });
});

bot.login(config.token);
