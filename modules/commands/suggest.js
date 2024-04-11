module.exports.config = {
	name: "suggest",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Yêu cầu công việc/đóng góp ý kiến",
	commandCategory: "Admin",
	usages: "[add/list/remove] [your input]",
	cooldowns: 5
};

module.exports.onLoad = function () {
	const fs = require("fs-extra");

	if (!fs.existsSync(__dirname + "/cache/requestList.json")) {
		const requestList = [];
		fs.writeFileSync(__dirname + "/cache/requestList.json", JSON.stringify(requestList));
	}
}

module.exports.run = function({ api, event, args, permssion }) {
	const fs = require("fs-extra");
	const content = args.slice(1, args.length);
	const dirFile = __dirname + "/cache/requestList.json";

	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);

	switch (args[0]) {
		case "add": {
			const suggest = `[ ${event.senderID} ] ${content.join(" ")}`
			getData.push(suggest);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Bạn đã thêm suggest mới thành công`, event.threadID, event.messageID);
		}
		case "list":
		case "all": {
			if (getData.length == 0) return api.sendMessage(`Kasalukuyang walang ipapakitang mungkahi!`, event.threadID, event.messageID);
			var workList = "";
			getData.map(item => workList += `\n- ${item}`);
			return api.sendMessage(`Narito ang lahat ng mga mungkahi: ${workList}`, event.threadID, event.messageID);
		}

		case "delete":
		case "del": {
			if (permssion !== 2) return api.sendMessage("Hindi ka awtorisadong gumamit ng delete!", event.threadID, event.messageID);
			if (getData.length == 0) return api.sendMessage(`Kasalukuyang walang mga mungkahi na tanggalin!`, event.threadID, event.messageID);
			if (content.length == 0) return api.sendMessage(`Kailangan mong tukuyin ang item na tatanggalin`, event.threadID, event.messageID);
			if (isNaN(content)) return api.sendMessage(`Bạn cần phải chỉ định mục cần xóa`, event.threadID, event.messageID);
			getData.splice((parseInt(content) - 1), 1);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`Matagumpay na natanggal ang item na may id: ${content}`, event.threadID, event.messageID);
		}
		default:
			global.utils.throwError("suggest", event.threadID, event.messageID);
		break;
	}
}