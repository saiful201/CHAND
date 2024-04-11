const fs = require("fs");
module.exports.config = {
name: "Lì xì",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung",
    description: "Li Xia",
    commandCategory: "No command marks needed",
    usages: "No need for prefix, just chat with lucky money",
    cooldowns: 5,
};
module.exports.event = function({ api, event, client, __GLOBAL }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("lì xì")==0 || (event.body.indexOf("Lucky money")==0)) {
        var msg = {
                body: "cc 🙂",
                attachment: fs.createReadStream(__dirname + `/noprefix/lixicailol.mp3`)
            }
            api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}