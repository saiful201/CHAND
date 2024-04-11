module.exports.config = {
    name: "resetlist",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "DuyVuongUwU",
    description: "reset the list to need",
    commandCategory: "group",
    usages: "[args]",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    let {messageID, threadID, senderID} = event;
    const out = msg => api.sendMessage(msg, threadID, messageID);
    if (!args[0]) return out(`Enter the name of the list that needs to be reset.`);
    else if (args[0] == "ban") {
            let {messageID, threadID, senderID} = event;
    var info = await api.getThreadInfo(threadID);
    const out = msg => api.sendMessage(msg, threadID, messageID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return out(`Bot does not have permission to use this command.`);
    var fs = require("fs-extra");
    
    if (!fs.existsSync(__dirname + `/cache/databan.json`)) {
            const dataaa = {bans: {}, banned: {}};
            fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(dataaa));
                    }
  var databan = JSON.parse(fs.readFileSync(__dirname + `/cache/databan.json`)); //đọc nội dung file
  if(!databan.bans.hasOwnProperty(threadID)) {
            databan.bans[threadID] = {}; 
            fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
    
  }
  var info = await api.getThreadInfo(threadID);
  if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return out(`Don't have the right to not use it.`);
    databan.bans[threadID] = {};
    databan.banned[threadID] = [];
    fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
    out(`Reset "ban" list.`);
    }
    else {
        return out(`Syntax error!`);
    }
}