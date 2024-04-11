module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "MR CHAND", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/jOl6XVg.jpeg" ,
"https://i.imgur.com/x8T8ZNB.jpeg" ,
"https://i.imgur.com/xzZJrOc.jpeg" ,
"https://i.imgur.com/58MMQ02.jpeg" ,
"https://i.imgur.com/1Qantts.jpeg" ,
"https://i.imgur.com/NDeXnj4.jpeg" ,
"https://i.imgur.com/ETnrLCv.jpeg" ,
"https://i.imgur.com/JtSDnEn.jpeg" ,
"https://i.imgur.com/HV2lqTo.jpeg" ,
"https://i.imgur.com/ilHbbN3.jpeg" ,
"https://i.imgur.com/3AQ8PlO.jpeg" ,
];
var callback = () => api.sendMessage({body:`◁➽▷ 𝐀𝐃𝐌𝐈𝐍 & 𝐁𝐎𝐓 ◁➽▷

☞𝗕𝗼𝘁 𝗡𝗮𝗺𝗲☜  ${global.config.BOTNAME}

*╔══❖•ೋ° °ೋ•❖══╗*
💋𝗕𝗼𝘁 𝗔𝗱𝗺𝗶𝗻💋 ☜☞ 𝐌𝐑 𝐂𝐇𝐀𝐍𝐃
*╚══❖•ೋ° °ೋ•❖══╝*

➤𝗔𝗗𝗠𝗜𝗡 𝗬𝗢𝗨𝗧𝗨𝗕𝗘➤  

https://youtube.com/@chandtricker436

🍂𝗣𝗘𝗥𝗙𝗜𝗫🍂 ═➤ 👉🏻${global.config.PREFIX}👈🏻

➽ 𝗨𝗣𝗧𝗜𝗠𝗘 ➽

➤ 𝗧𝗢𝗗𝗔𝗬 𝗜𝗦 ➽➤ ${juswa} 

💌Bot is running💌 ${hours}:${minutes}:${seconds}.

✅Thanks for using ${global.config.BOTNAME} Bot🖤`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };