module.exports.config = {
 name: "nobra",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Le Anh Truong - main pear corrects the error ",
 description: "nobra",
 commandCategory: "nsfw",
 usages: "nobra",
 cooldowns: 1,
 
 };
   
module.exports.run = async ({ api, event }) => {
 const axios = require('axios');
 const request = require('request');
 const fs = require("fs");
 axios.get('https://api.leanhtruong.com/img/mong/mong.php').then(res => {
 let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
 
 let callback = function () {
     api.sendMessage({
      attachment: fs.createReadStream(__dirname + `/cache/nobra.${ext}`)
     }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nobra.${ext}`), event.messageID);
    };
    request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nobra.${ext}`)).on("close", callback);
   })
}