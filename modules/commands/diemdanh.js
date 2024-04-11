module.exports.config = {
	name: "diemdanh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Kanzu",
	description: "*",
	commandCategory: "Box - Chat",
	usages: "howtouse option input",
	cooldowns: 5,
	envConfig: {
    cooldownTime: 3000000
    }
};

module.exports.onLoad = function () {
	const fs = require("fs-extra");

	if (!fs.existsSync(__dirname + "/cache/diendanh.json")) {
		const diemdanh = [];
		fs.writeFileSync(__dirname + "/cache/diendanh.json", JSON.stringify(diemdanh));
	}
}

module.exports.run = async ({ api, event, args, permssion, Users, global, Currencies }) => {
	const fs = require("fs-extra");
	const content = args.slice(1, args.length);
	const dirFile = __dirname + "/cache/diendanh.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);
	switch (args[0]) {
		case "add": {
			return api.sendMessage(`Just Click /diemdanh, no need to click /diemdanh add anymore`, event.threadID, event.messageID);
		}
		case "delete":
		case "del": {
			if (permssion !== 2) return api.sendMessage("You are not authorized to use delete!", event.threadID, event.messageID);
			if (getData.length == 0) return api.sendMessage(`There are no items that can be deleted`, event.threadID, event.messageID);
			if (content.length == 0) return api.sendMessage(`You need to specify the item to delete`, event.threadID, event.messageID);
			if (isNaN(content)) return api.sendMessage(`You need to specify the item to delete`, event.threadID, event.messageID);
			getData.splice((parseInt(content) - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Successfully deleted item with id: ${content}`, event.threadID, event.messageID);
		}
		case "list":
		case "all": {
			if (getData.length == 0) return api.sendMessage(`There is currently no one to show attendance!`, event.threadID, event.messageID);
			var workList = "";
			getData.map(item => workList += `\n[❖] - ${item}`);
			return api.sendMessage(`Here are all the people present : ${workList}`, event.threadID, event.messageID);
		}	
		default :
			try {
		 const today = new Date().toLocaleString("vi-vn", {timeZone: "Asia/Ho_Chi_Minh"});
const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(event.senderID)).name;
const name = Users.getData(event.senderID).name || (await api.getUserInfo(event.senderID))[event.senderID].name;
const diemdanh = `[ ` +  today  + ` ] • `+`[ ${name} ] ⚜️ [ CÓ ]`
.replace(/\{name}/g, nameUser)
		getData.push(diemdanh);
		fs.writeFileSync(dirFile, JSON.stringify(getData));
		return api.sendMessage(`Successfully Attended`, event.threadID,event.messageID);
	}
			catch (e) {
		 		api.sendMessage("Error Behold Bruh" + err, event.threadID, event.messageID);
		}
	}
}