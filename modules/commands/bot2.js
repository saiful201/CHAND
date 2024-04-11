const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "bot2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "NDQ & PTAT",
  description: "Bot information and active hardware",
  commandCategory: "Info",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://uploads.disquscdn.com/images/81f2257d8a2cba4fd000b3a5f6a090f724d0fd6a9324bcd51687ee666df685b5.gif?fbclid=IwAR1BpNIpX8QCdKbSKfdi7vhOth_Fl5yVx6YMnyNBKlyTcPKqxGuCM-1W4EI",
  ];
   var callback = () => api.sendMessage({body:`Bot information and active hardware:
• Information bot is using:
• CPU: Core i7
• RAM: 32GB
• SSD or HDD: Withstand
• Windows Version: Win 11
• Network: Converge
• Uptime max: 24h
• Stability: Medium/High
• Language: English
• Computer name: ASUS ROG Gaming Laptop
» Updating....`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };
