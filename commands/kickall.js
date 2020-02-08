module.exports.run = async (bot, message, args) => {
  message.guild.members.forEach((member) => {
    if(!member.user.bot){
      try{
        message.guild.member(member).kick('Capitalist')
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
