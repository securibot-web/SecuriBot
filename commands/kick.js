module.exports.run = async (bot, message, args) => {
  let user message.guild.member(message.mentions.users.first());
  if(!user) return message.channel.send('Il faut spécifier un membre à bannir!')
  if(!message.author.hasPermission('ADMINISTRATOR')) return message.channel.send('Tu n\'as pas les permissions requises.')
  message.guild.member(user).kick(`Kicked by ${message.sender}`)
}

module.exports.help = {
  name: 'kick'
}
