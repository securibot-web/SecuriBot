module.exports.run = async (bot, message, args) => {
  message.channel.send({
    embed: {
      title: 'SecuriBot Help',
      description: 'Voici toutes les commandes disponibles',
      color: 0x39b869,
      fields: [{
        name: 'Modération:',
        value: "'/kick <membre>': expulse un membre du serveur\n'/ban <membre>': bannit un membre du serveur\n'/serverinfo': affiche les informations du serveur\n'/userinfo <membre>': affiche les informations d'un membre"
      },
      {
        name: 'Autre:',
        value: "'/autoscan': scanne le serveur"
      }],
      footer: {
        text: 'https://securibot-web.github.io/'
      }
    }
  });
}

module.exports.help = {
  name: 'help'
}
