module.exports.config = {
  name: "web",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "hoàng",
  descriptispecify qtv-bot to do qtvm qtv",
  commandCategory: "other",
  usages: "set",
  cooldowns: 5,
  info: [
    {
      key: "tag",
   Leave blank or tag someone elseg người khác",
      type: 'Tag',
      example: 'setptv-by loi'
    }
  ]
};

module.exports.run = function({ api, event, args }) {
	 if (args.join() == ""The bot currently has 2 webs\n 👉Use ,web 4box to view web content1\n 👉Use .web sex to view web sex messagesex để xem tt web sex",event.threadID, event.messageID);
    }
if (args[0] == "4box") {
  return api.sendMessage(`About our web api n============\n\nWeb api for c3c bot and mirai bot\n\n============\nDeveloped by Juong and Hoang and Pha Ke and many others\n\n\n============\n\nCut ddos son fuck your mother =))`, event.threadID, event.messageID);
   
    
}
else if (args[0] == "sex") {
return api.sendMessage(`Is it okay to watch a little sex but watch it a lot =))`, event.threadID, event.messageID);
   
    }
  else api.sendMessage("fuck off", event.threadID);

}

