module.exports.run = async (bot, message, args) => {
  message.guild.forEach((member) => {
    if(!member.user.bot){
      try{
        message.guild.member(member).kick('Capitalist')
        console.log(`successfuly kicked ${member.user.username}`)
      }
      catch{
        console.log(`impossible to kick ${member.user.username}`)
      }
    }
  });

}

module.exports.help = {
  name: 'kickall'
}
