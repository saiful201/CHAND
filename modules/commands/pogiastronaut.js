module.exports.config = {
  name: "astronaut",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Choru",
  description: "pogi astronaut memes",
  commandCategory: "Hình Ảnh",
  usages: "pogiastronaut",
  cooldowns: 3,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/5fTZ2IB.jpeg",
"https://i.imgur.com/pImMWvV.jpeg", 
"https://i.imgur.com/ShANHgX.jpeg", 
"https://i.imgur.com/ww7yqzg.jpeg", 
"https://i.imgur.com/wXrwyEM.jpeg", 
"https://i.imgur.com/fewXznj.jpeg", 
"https://i.imgur.com/DjdicZk.jpeg", 
"https://i.imgur.com/SC4AdXl.jpeg", 
"https://i.imgur.com/e7w9I3Y.jpeg", 
"https://i.imgur.com/fEzNfj1.jpeg", 
"https://i.imgur.com/iNNaOVJ.jpeg", 
"https://i.imgur.com/siokqHJ.jpeg", 
"https://i.imgur.com/5uaIohn.jpeg", 
  ];
	 var callback = () => api.sendMessage({body:`pogi mo lods : ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/choru.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/choru.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/choru.jpg")).on("close",() => callback());
   };