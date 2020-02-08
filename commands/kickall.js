module.exports.run = async (bot, message, args) => {
  forEach((member, message.guild.members) => {
    if(!member.user.bot){
      try{
        message.guild.member(member).kick('Capitalist')
        console.log(`successfuly kicked ${member}`)
      }
      catch{
        console.log(`impossible to kick ${member}`)
      }
    }
  });

}

module.exports.help = {
  name: 'kickall'
}
