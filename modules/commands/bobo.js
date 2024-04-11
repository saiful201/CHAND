module.exports.config = {
  name: "bobo",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Meyo",
  description: "",
  commandCategory: "noprefix",
  usages: "",
  cooldowns: 5,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["bobo"] !== "undefined" && thread["bobo"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == global.data.botID) return;
  function out(data) {
api.setMessageReaction("😤", event.messageID, (err) => {}, true)
    api.sendMessage(data, threadID, messageID)
  }
  //reply
  var msg = {
    body: `Hi  ${name}, Ferson never change. Science tells us that our genetic imprints predetermine your fate, your character, your choices. Pinanganak kang bobo, lalaki kang bobo, mamamatay kang bobo!!!! `,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]('https://apikanna.khoahoang3.repl.co')).data.data,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["bobo", "Bobo", "BoBo", "BOBO",  "bubu", "Bubu"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "bobo thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "bobo success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["bobo"] == "undefined" || data["bobo"] == true) data["bobo"] = false;
  else data["bobo"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["bobo"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
  }