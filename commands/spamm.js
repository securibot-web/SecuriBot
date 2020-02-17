module.exports.run = async (bot, message, args) => {
  message.delete(1000);
  if(!args[1]) return;
  else{
    let message = "";
    for(var i = 1; i < args.length; i++){
      message += args[i] + " ";
    }
    const parsed = parseInt(args[0]);
    if (isNaN(parsed)) return
    else{
      for(var i = 1; i < parsed; i++){
        setTimeout(function(){
            message.channel.send(message)
        }, 750);
      }
    }
  }
}

module.exports.help = {
  name: 'spamm'
}
