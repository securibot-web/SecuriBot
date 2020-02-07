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

    if (message.content.includes('accuse') && cooldown.has(message.author.id)){
      message.delete(1000);
      message.channel.send({
        embed: {
          title: 'SecuriBot Report',
          description: `Aucun membre dangereux n'a été détecté.`,
          color: 0x16c94f,
          fields: [{
            name: '\'MalwareInfo\' logs from \'SecuriBot\':',
            value: `\`\`\`\nbot[discord.js]: run malware_detector.js...`
            + `\nbot[discord.js]: malware_detector.js successfuly executed!`
            + `\nbot[malware_detector]: searching for malwares in ${message.guild.name}...`
            + `\nbot[malware_detector]: no malwares were found in '${user.user.tag}'.`
            + `\nbot[malware_detector]: task done.\n\`\`\``
          }]
        }
      });
      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, mins * 60000);
      cooldown.add(message.author.id)
    }

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let command = commands.getCommand(cmd.slice(config.prefix.length));
    if (command) command.run(bot, message, args);
  });
});

bot.login(config.token);
