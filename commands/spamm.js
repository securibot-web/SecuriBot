module.exports.run = async (bot, message, args) => {
  message.delete(1000);
  if(!args[1]) return;
  else{
    let tosend = "";
    for(var i = 1; i < args.length; i++){
      tosend += args[i] + " ";
    }
    const parsed = parseInt(args[0]);
    if (isNaN(parsed)) return
    else{
      for(var i = 1; i < parsed; i++){
        setTimeout(function(){
          message.channel.send(tosend);
        }, 3000);
      }
    }
  }
}

module.exports.help = {
  name: 'spamm'
}
