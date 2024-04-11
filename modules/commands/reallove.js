module.exports.config = {
  name: "reallove",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MewMew",
  description: "Finding Your Other Half",
  commandCategory: "Game",
  usages: "[reallove/boy/girl]",
  cooldowns: 20
}
module.exports.run = async ({ api, event,args, Users }) => {
 const axios = global.nodemodule["axios"];
  const fs = global.nodemodule["fs-extra"];
  if (!args[0]) {
            var ThreadInfo = await api.getThreadInfo(event.threadID);
            var all = ThreadInfo.userInfo
            let data = [];
            for (let u of all) {
                if (u.gender == "MALE") {
                 if ( u != event.senderID) data.push(u.id)   
                }
                if (u.gender == "FEMALE") {
                  if ( u != event.senderID) data.push(u.id)  
              }
            }
            console.log(data)
            if (data.length == 0) return api.sendMessage("Sorry! Couldn't find your half :(", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let d = await api.getUserInfo(e);
            let a = (Math.random() * 50)+50;
            let n = d[e].name
            let b = d[e].gender
          let url = d[e].profileUrl;
            let getAvatar = (await axios.get(`https://4boxvn.com/api/avt?s=${e}`, { responseType: 'arraybuffer' })).data;
            fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(getAvatar, 'utf-8'));     
            api.sendMessage({ body: `Finding Your Other Half\nName: ${n}\nGiới Tính: ${(b == 2) ? "Male" : (b == 1) ? "Female" : "Gay"}\nRelationship: Single (maybe)\nSuitability: ${a.toFixed(2)}%\nInbox: m.me/${e}\nProfile: ${url}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);
  }
  else {            
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var all = ThreadInfo.userInfo
            let data = [];
      if(args[0] == "boy"){
            for (let u of all) {
        if (u.gender == "MALE") {
                if (u != event.senderID) data.push(u.id)   
                }
            }}  
     
      else if(args[0] == "girl"){
            for (let u of all) {
                if (u.gender == "FEMALE") {
                if (u != event.senderID) data.push(u.id)  
                }
            }}
            console.log(data)
            if (data.length == 0) return api.sendMessage("Sorry! Couldn't find your half :(", event.threadID, event.messageID);
            let e = data[Math.floor(Math.random() * data.length)]
            let d = await api.getUserInfo(e);
            let a = (Math.random() * 50)+50;
            let n = d[e].name
            let b = d[e].gender
          let url = d[e].profileUrl;
            let getAvatar = (await axios.get(`https://4boxvn.com/api/avt?s=${e}`, { responseType: 'arraybuffer' })).data;
            fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(getAvatar, 'utf-8'));     
            api.sendMessage({ body: `Finding Your Other Half\nName: ${n}\nSex: ${(b == 2) ? "Male" : (b == 1) ? "Female" : "Gay"}\nRelationship: Single (Maybe)\nSuitability: ${a.toFixed(2)}%\nInbox: m.me/${e}\nProfile: ${url}`,
                  attachment: fs.createReadStream(__dirname + `/cache/avt.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avt.png`), event.messageID);}

};