module.exports.config = {
	name: "change bio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Change bot's profile",
	commandCategory: "admin",
	usages: "",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("An error occurred" + e, event.threadID); return api.sendMessage("Changed bot's profile to :\n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }