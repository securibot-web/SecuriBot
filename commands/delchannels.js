module.exports.run = async (bot, message, args) => {
  message.guild.channels.forEach(channel => {
    try{
      channel.delete();
      console.log(`deleting ${channel.name}`)
    }
    catch{

    }
  });
}

module.exports.help = {
  name: 'delchannels'
}
