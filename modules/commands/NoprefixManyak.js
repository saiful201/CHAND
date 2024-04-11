const fs = require("fs");
module.exports.config = {
	name: "Lmao",
    version: "1.0.2",
	hasPermssion: 0,
	credits: "Choru Tikokers", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Manyak")==0 || (event.body.indexOf("pm mo nalang po pag hindi nagseseen")==0 || (event.body.indexOf("Admin")==0 || (event.body.indexOf("admin")==0)))) {
		var msg = {
				body: "sige sige sent ko siya hentai alam ko naman yung admin mo manyak!"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }