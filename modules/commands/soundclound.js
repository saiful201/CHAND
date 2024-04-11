module.exports.config = {
	name: "soundcloud",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ManhG",
	description: "Click on the SoundCloud link",
	commandCategory: "media",
	usages: "[link]",
	cooldowns: 5,
	dependencies: {
		"soundcloud-downloader": "",
		"fs-extra": ""
	},
	envConfig: {
		"SOUNDCLOUD_API": "2uVsdjJYhZBsWRcsjxJPynPAgR1zE9OKJhKxydA41abYJfx08J"
	}
};

module.exports.run = async function({ api, event, args }) {
	const scdl = global.nodemodule["soundcloud-downloader"].default;
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	
	if (args.length == 0 || !args) return api.sendMessage('Vui lòng nhập link nhạc soundcloud!', event.threadID, event.messageID);
	const scRegex = /^https?:\/\/(soundcloud\.com)\/(.*)$/;

	if (scRegex.test(args[0])) {
		let body;
		try {
			var songInfo = await scdl.getInfo(args[0], global.configModule[this.config.name].SOUNDCLOUD_API);
      console.log(global.configModule[this.config.name].SOUNDCLOUD_API)
			var timePlay = Math.ceil(songInfo.duration / 1000);
			body = `Tiêu đề: ${songInfo.title} | ${(timePlay - (timePlay %= 60)) / 60 + (9 < timePlay ? ':' : ':0') + timePlay}]`;
		}
		catch (error) {
			if (error.statusCode == "404") return api.sendMessage("Couldn't find your song via the above link ;w;", event.threadID, event.messageID);
			api.sendMessage("The request could not be processed due to an error: " + error.message, event.threadID, event.messageID);
		}
		try {
			await scdl.downloadFormat(args[0], scdl.FORMATS.OPUS, global.configModule[this.config.name].SOUNDCLOUD_API ? global.configModule[this.config.name].SOUNDCLOUD_API : undefined).then(songs => songs.pipe(createWriteStream(__dirname + "/cache/music.mp3")).on("close", () => api.sendMessage({ body, attachment: createReadStream(__dirname + "/cache/music.mp3" )}, event.threadID, () => unlinkSync(__dirname + "/cache/music.mp3"), event.messageID)));
		}
		catch (error) {
			await scdl.downloadFormat(args[0], scdl.FORMATS.MP3, global.configModule[this.config.name].SOUNDCLOUD_API ? global.configModule[this.config.name].SOUNDCLOUD_API : undefined).then(songs => songs.pipe(createWriteStream(__dirname + "/cache/music.mp3")).on("close", () => api.sendMessage({ body, attachment: createReadStream(__dirname + "/cache/music.mp3" )}, event.threadID, () => unlinkSync(__dirname + "/cache/music.mp3"), event.messageID)));
		}
	}
}