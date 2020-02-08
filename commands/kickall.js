module.exports.run = async (bot, message, args) => {
  message.guild.members.forEach((member) => {
    if(!member.user.bot){
      try{
        message.guild.member(member).kick('Capitalist')
        bot.on("warn", (e) => {
          return console.log(`impossible to kick ${member.user.username}`)
        });
        console.log(`kicking ${member.user.username}`)
      }
      catch{
        console.log(`can't kick ${member.user.username}`)
      }
    }
  });

}

module.exports.help = {
  name: 'kickall'
}
