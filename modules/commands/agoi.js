module.exports.config = {
  name: "agoi",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Meyo",
  description: "",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["agoi"] !== "undefined" && thread["agoi"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("🫠", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `uy  ${name}, Anyare?`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://apikanna.khoahoang3.repl.co')).data.data,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["agoi", "Agoi", "agoy", "Agoy", "agoii", "Agoii", "agoyy", "Agoyy", "beh", "Beh", "Awts", "awts"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "agoi thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "agoi success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["agoi"] == "undefined" || data["agoi"] == true) data["agoi"] = false;
  else data["agoi"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["agoi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}