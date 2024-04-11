module.exports.config = {
	name: "zmp4",	
    version: "1.0.0", 
	hasPermssion: 0,
	credits: "Khánh Milo",
	description: "Play music through ZingMp3 . search keyword", 
	commandCategory: "media",
	usages: "search keyword",
	cooldowns: 0, 
	dependencies: {
		"fs-extra": "",
		"axios": "",
        "tinyurl": ""
	},
};
module.exports.handleReply = async function({ api, event, handleReply }) {
	const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    api.sendMessage("Processing your request!", event.threadID, (err, info) =>
    setTimeout(() => {api.unsendMessage(info.messageID) } , 10000));
    try {
	var getms = (await axios.get(`http://api.mp4.zing.vn/api/streaming/audio/${handleReply.link[event.body - 1]}/320`, {responseType: "arraybuffer"})).data;
    var shortLink = await global.nodemodule["tinyurl"].shorten(`http://api.mp3.zing.vn/api/streaming/audio/${handleReply.link[event.body - 1]}/320`);			
    fs.writeFileSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp3`, Buffer.from(getms, "utf-8")); 
    if (fs.statSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp3`).size > 99999999999999) return api.sendMessage('File cannot be sent because it is larger than 25MB.', event.threadID, () => fs.unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`), event.messageID);
    else api.sendMessage({body: `Link Tải: ${shortLink}`,attachment: fs.createReadStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.mp4`), event.messageID);
}
catch {
    api.sendMessage("Your request could not be processed!", event.threadID, event.messageID);
}
return api.unsendMessage(handleReply.messageID);
}

module.exports.run = async function({ api, args, event }) {
 const axios = global.nodemodule["axios"];
 if (args.length == 0 || !args) return api.sendMessage('The search field cannot be empty!', event.threadID, event.messageID);
 const keywordSearch = args.join(" ");
 try {
 var getms = (await axios.get(`http://ac.mp4.zing.vn/complete?type=artist,song,key,code&num=500&query=${encodeURIComponent(keywordSearch)}`)).data;
 var retrieve = getms.data[0], msg = '', num = 0, link = [];
 for (var i = 0; i < 5; i++) {
    if (typeof retrieve.song[i].id != 'undefined') {
        msg += `${num += 1}. Name of the song : ${decodeURIComponent(retrieve.song[i].name)}\nSinger : ${retrieve.song[i].artist}\n◆━━━━━━━━━◆\n`;				
        link.push(retrieve.song[i].id);
         }
}
return api.sendMessage(`🔊 Yes ${link.length} Results match your search term:\n\n${msg}\nPlease reply(feedback) choose one of the above searches`, event.threadID,(error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, link }), event.messageID);
}
catch{
    api.sendMessage(`No keywords were found to match:\n ►►►${keywordSearch}\n👉Please try again with different results!`, event.threadID, event.messageID);
}
}