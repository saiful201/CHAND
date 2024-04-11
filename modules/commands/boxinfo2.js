const axios = global.nodemodule['axios'];
const fs = global.nodemodule['fs'];
const request = global.nodemodule['request']

module.exports.config = {
  name: "boxinfo2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Check group chat information",
  commandCategory: "general",
  usages: "boxinfo",
  cooldowns: 10,
  dependencies: {
    "fs": "",
  "axios": ""
}
};

module.exports.run = async function({
  api,
  event,
  args,
  client,
  __GLOBAL,
  threadID
}) {
  let threadInfo = await api.getThreadInfo(event.threadID);
  let sex = threadInfo.approvalMode;
  var pd = sex == false ? "Shutting down" : sex == true ? "On" : "Not Thread";
  var callback = () => api.sendMessage({
    body: `Name: ${threadInfo.threadName}\nID Thread: ${threadInfo.threadID}\nMember approval: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n`
    +`+Number of member :${threadInfo.participantIDs.length}\n`
    +`+Administrator number ${threadInfo.adminIDs.length}\n`
    +`+Total number of messages: ${threadInfo.messageCount}\n`,
    attachment: fs.createReadStream(__dirname + "/cache/2.png")
  }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
    if (ten = threadInfo.threadName == null){var ten = "Name not set yet"}
    if (emg = threadInfo.emoji == null){var emg = "(y)"}
    var callback2 = () => api.sendMessage({
    body: `Name: ${ten}\nID Thread: ${threadInfo.threadID}\nMember approval: ${pd}\nEmoji: ${emg}\nInformation: \n`
    +`+Number of member :${threadInfo.participantIDs.length}\n`
    +`+Administrator number ${threadInfo.adminIDs.length}\n`
    +`+Total number of messages: ${threadInfo.messageCount}\n`}, event.threadID)
  if(avt = threadInfo.imageSrc == null)
    {return callback2()}
  else
    {return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback())}
}
// let threadInfo = await api.getThreadInfo(event.threadID);
//   let sex = threadInfo.approvalMode;
//   var pd = sex == false ? "Đang tắt" : sex == true ? "Đang bật" : "Không phải Thread";
//   var callback = () => api.sendMessage({
//     body: `Name: ${threadInfo.threadName}\nID Thread: ${threadInfo.threadID}\nMember approval: ${pd}\nEmoji: ${threadInfo.emoji}\nInformation: \n`
//     +`+Number of member :${threadInfo.participantIDs.length}\n`
//     +`+Administrator number ${threadInfo.adminIDs.length}\n`
//     +`+Total number of messages: ${threadInfo.messageCount}\n`,
//     attachment: fs.createReadStream(__dirname + "/src/2.png")
//   }, event.threadID, () => fs.unlinkSync(__dirname + "/src/2.png"));
//    return request(`${threadInfo.imageSrc}`).pipe(fs.createWriteStream(__dirname+'/src/2.png')).on('close',() => callback());
  
  // return console.log(threadInfo.imageSrc) 