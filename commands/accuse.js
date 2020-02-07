module.exports.run = async (bot, message, args) => {
  let user = message.guild.members.random();
  while (user.user.bot) user = message.guild.members.random();
  message.channel.send(`AVERTISSEMENT :warning: Le membre **${user}** représente une menace pour le serveur:`)
  message.channel.send({
    embed: {
      color: 0xfcd303,
      fields: [{
        name: "MalwareInfo:",
        value: `\`\`\`\nbot[discord.js]: run malware_detector.js...`
        + `\nbot[discord.js]: malware_detector.js successfuly executed!`
        + `\nbot[discord.js:malware_detector]: searching for malwares in ${message.guild.name}...`
        + `\nbot[discord.js:malware_detector]: found malware at '${message.guild.name}/${user.user.tag}'.`
        + `\nbot[discord.js:malware_detector]: task done.\n\`\`\``
      }]
    }
  });
}

module.exports.help = {
  name: 'accuse'
}
