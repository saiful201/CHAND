module.exports.config = {
  name: "bốc thăm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Lazic Team",
  description: "is a lottery game",
  commandCategory: "random-text",
  cooldowns: 1
};

module.exports.run = async ({ api, event, args, Users,__GLOBAL,Currencies }) => {

  const axios = require("axios");

  const fs = require("fs-extra");

  const request = require("request");
   const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
  var emoji = ["Message vs Ny is I love you 3000 :3", "Challenge the trend with a friend you know via face", "Through Turn", "Let Avt couple with a stranger", "Love Message With any 1 person" , "Confess to a friend or any other person", "Tell a truth", "show a photo of the most beautiful friend", "cheat 1 child in the gr", "Pick up 1 child in the group", "Kiss 1 person in the group with the command /kiss [ tag it in ]","Say a sentence that makes you saddest","What do you want most now","Speak bad of a friend","please Tell me 1 thing you've done that surprised me :c","What makes you happy","Tell me about a time you played a fool ","Who do you think is the prettiest in this group","you're good at What's the best subject","Let's create a poem to confess to the whole group ‍♂️","use the nature of your best subject to confess your love."]

  var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
api.sendMessage(`This Is The Challenge Of :` 
 + " [ {name} ] "
  .replace(/\{name}/g, nameUser) 
 + `: ${random_emoji}\n[ ! ] => Please Follow Before Clicking Again!\n[ H ] Contribute to the challenge via \'/callad\' !`, event.threadID, event.messageID);
} 
