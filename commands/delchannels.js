module.exports.run = async (bot, message, args) => {
  message.guild.channels.forEach(channel => {
    try{
      channel.delete();
      console.log(`deleting channel '${channel.name}'`)
    }
    catch{

    }
  });
  message.guild.createChannel("mdr", "text");
  console.log(`done`)
}

module.exports.help = {
  name: 'delchannels'
}
