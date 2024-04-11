const fs = require("fs");
module.exports.config = {
    name: "illusion",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung - Fixed by LTD", 
    description: "no prefix",
    commandCategory: "No command marks needed",
    usages: "Are you delusional? ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("illusion")==0 || (event.body.indexOf("Illusion")==0)) {
        var msg = {
                body: "Are you delusional ?? 🙃",
                attachment: fs.createReadStream(__dirname + `/noprefix/aotuong.mp4`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}