module.exports.config = {
    name: "oantuti",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "JustGon - mod by OreoZera", //Giữ credit tôn trọng người làm ra
    description: "scissor hammer",
    commandCategory: "Game",
    usages: "[tag]",
    cooldowns: 0,
    dependencies: {
    }
};
module.exports.run = async function ({ event, api, args, Currencies,Users,Threads }) {
    function outMsg(data) {
        api.sendMessage(data, event.threadID, event.messageID);
       }
          var data = await Currencies.getData(event.senderID);
          var money = data.money           
    if(!args[0]) {
        outMsg("⚡️Please enter 'scissors' or 'hammer' or 'bag'")
    }
    else{
    var turnbot = ["✌️","👊","✋"]
          var botturn = turnbot[Math.floor(Math.random() * turnbot.length)] 
          const userturn = args[0];
          const coins = args.join(" ").replace(userturn, ""); 
          if(coins < 20)
          api.sendMessage(`⚡️Your bet must be more than 20$`,event.threadID,event.messageID)
          else{
          if(money < coins)  
          api.sendMessage(`⚡️Your balance is not enough ${coins}$ to be able to play`,event.threadID,event.messageID)
          else {           
          if (userturn == "scissors"||userturn == "hammer"||userturn == "bag") {
            if (userturn == turnbot) {
              return outMsg(`⚡️Draw\nUser : ${userturn}\nBot : ${botturn}\nDraw, balance unchanged`)
            } else if (userturn == "scissors") {
              if (botturn == "👊") {
                Currencies.setData(event.senderID, options = {money: money -`${coins}`})
                return outMsg(`⚡️YOU LOSE\n\nUser : ${userturn}\nBot : ${botturn}\n\nYou lost and lost ${coins}$`)
                
              } else if (botturn == "✋") {
                Currencies.setData(event.senderID, options = {money: money +`${coins}`})
                return outMsg(`⚡️BYOU HAVE WIN\n\nUser : ${userturn}\nBot : ${botturn}\n\nYou won and got added ${coins}$`)
                
            }
          } else if (userturn == "hammer") {
            if (botturn == "✋") {
              Currencies.setData(event.senderID, options = {money: money -`${coins}`})
              return outMsg(`⚡YOU LOSE\n\nUser : ${userturn}\nBot : ${botturn}\n\nYou lost and lost ${coins}$ `)
              
            } else if (botturn == "✌️") {
              Currencies.setData(event.senderID, options = {money: money +`${coins}`})
              return outMsg(`⚡BYOU HAVE WIN\n\nUser : ${userturn}\nBot : ${botturn}\n\nYou won and got added ${coins}$`)
              
          }
        } else if (userturn == "bag") {
          if (botturn == "✌️") {
            Currencies.setData(event.senderID, options = {money: money -`${coins}`})
            return outMsg(`⚡YOU LOSE\n\nUser : ${userturn}\nBot : ${botturn}\n\nYou lost and lost ${coins}$ `)
            
          } else if (botturn == "👊") {
            Currencies.setData(event.senderID, options = {money: money +`${coins}`})
            return outMsg(`⚡️BYOU HAVE WIN\n\nUser : ${userturn}\nBot : ${botturn}\n\nYou won and got added ${coins}$ `)
            
        }
      }
    }
        } 
      }
    }
}
