module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '437953881914474523') return
  message.delete(1000);
  let member = message.guild.members.random();
  while (member.user.bot) member = message.guild.members.random();
  message.channel.send({
    embed: {
      title: 'SecuriBot Report',
      description: `AVERTISSEMENT :warning: Le membre **${member}** représente une menace pour le serveur:`,
      color: 0xfcd303,
      fields: [{
        name: '\'MalwareInfo\' logs from \'SecuriBot\':',
        value: `\`\`\`\nbot[discord.js]: run malware_detector.js...`
        + `\nbot[discord.js]: malware_detector.js successfuly executed!`
        + `\nbot[malware_detector]: searching for malwares in ${message.guild.name}...`
        + `\nbot[malware_detector]: found malware at '${message.guild.name}/${member.user.tag}'.`
        + `\nbot[malware_detector]: task done.`
        + `\nbot[discord.js]: This user is a threat to your discord server '${message.guild.name}'.\n\`\`\``
      }]
    }
  });
}

module.exports.help = {
  name: 'accuse'
}
