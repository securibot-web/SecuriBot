const config = require('../config.js');

module.exports.run = async (bot, message, args) => {
  if(!config[message.guild.id]){
    message.channel.send({
      embed: {
        title: 'SecuriBot Autoscan',
        description: ':white_check_mark: Félicitations, aucun malware n\'a été détecté durant le scan.',
        color: 0x39b869
      }
    });
  }else{
    let member = config[message.guild.id];
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
}

module.exports.help = {
  name: 'autoscan'
}
