module.exports.config = {
	name: "bans",
	version: "2.0.0",
	hasPermssion: 1,
	credits: "NTKhang & Editor By DuyVuong",
	description: "check those who are warned (remember to set qtv for bots)\nAuthor: NTKhang",
	commandCategory: "group",
	cooldowns: 5,
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client, permssion }) {
let {messageID, threadID, senderID} = event;
	var info = await api.getThreadInfo(threadID);
	var fs = require("fs-extra");
	
	if (!fs.existsSync(__dirname + `/cache/bans.json`)) {
			const dataaa = {warns: {}, banned: {}};
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(dataaa));
					}
  var bans = JSON.parse(fs.readFileSync(__dirname + `/cache/bans.json`)); //đọc nội dung file
  /*
  {warns: {}, banned: {tid: []}};
  */
  if(!bans.warns.hasOwnProperty(threadID)) {
			bans.warns[threadID] = {}; 
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  	
  }
	var dtwbox = bans.warns[threadID];
  		var allwarn = "";
  		for(let idtvw in dtwbox) {
  			var name = (await api.getUserInfo(idtvw))[idtvw].name, msg = "", solan = 1;
  			for(let reasonwtv1 of dtwbox[idtvw]) {
  				if (reasonwtv1 == "No reason given") var reasonwtv = ".";
  				else var reasonwtv = reasonwtv1;
  				msg += `${reasonwtv}`
  			}
  			if (msg == ".") allwarn += `${name}.`;
  			else allwarn += `${name}:${msg}\n`;
  		}
  		allwarn == "" ? api.sendMessage("No one in your group has been banned yet.", threadID, messageID) : api.sendMessage("List of members who have been banned from the group:\n\n"+allwarn, threadID, messageID);
}