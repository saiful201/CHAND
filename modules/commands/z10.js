const fs = require("fs");
module.exports.config = {
        name: "autoreact",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Minami Tatsuo",
        description: "auto react",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (haha.includes("lol") || haha.includes("lmao") || haha.includes("haha") || haha.includes("xd") || haha.includes("puta") || haha.includes("gagu") || haha.includes("HAHA") || haha.includes("😂") || haha.includes("🤣") || haha.includes("😆") || haha.includes("iyot") || haha.includes("eut") || haha.includes("kantot") || haha.includes("gago")){
                 return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("aray") || haha.includes("hays") || haha.includes("sakit") || haha.includes("ouch") || haha.includes("help") || haha.includes("😔") || haha.includes("aguy") || haha.includes("sayang") || haha.includes("😢") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("wow") || haha.includes("luh") || haha.includes("sheesh") || haha.includes("damn") || haha.includes("yes") || haha.includes("😮") || haha.includes("amazing") || haha.includes("dinga") || haha.includes("woah") || haha.includes("we") || haha.includes("galing")){
    return api.setMessageReaction("😮", event.messageID, (err) => {}, true)
        }
  if (haha.includes("iloveyou") || haha.includes("love") || haha.includes("mwa") || haha.includes("love") || haha.includes("iloveu")){
api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    api.sendMessage("ahhh you're so sweet", event.threadID, event.messageID);
  }
  if (haha.includes("nigga") || haha.includes("nigg")){
    api.setMessageReaction("😠", event.messageID, (err) => {}, true)
    api.sendMessage("RACIST mass report yan!!", event.threadID,event.messageID);
  }
  if (haha.includes("san ka punta") || haha.includes("sn ka punta") || haha.includes("saan") || haha.includes("san ka") || haha.includes("saan ka punta")){
api.setMessageReaction("💗", event.messageID, (err) => {}, true)
    api.sendMessage("to the moon", event.threadID, event.messageID);
}
  if (haha.includes("bot") || haha.includes("robot")){
    api.sendMessage("I'm here baby, ah ah", event.threadID, event.messageID)
  }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
  }