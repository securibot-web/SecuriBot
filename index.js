const config = require('./config.js');
const Discord = require('discord.js');
const commands = require('./commands');
const bot = new Discord.Client({DisableEveryone: true});

const cooldown = new Set();
const mins = 1

bot.on('ready', async () => {
  bot.user.setActivity('Protecting 5564 guilds')
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
