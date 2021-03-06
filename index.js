const config = require('./config.js');
const Discord = require('discord.js');
const commands = require('./commands');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', async () => {
  console.log('Bot launched')
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

    console.log(`${message.author.user.tag} issued the command ${cmd}.`)

    let command = commands.getCommand(cmd.slice(config.prefix.length));
    if (command) command.run(bot, message, args);
  });
});

bot.login(config.token);
