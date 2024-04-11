/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "Venus",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Information about the planets in the solar system",
  commandCategory: "Solar System",
  usages: "venus",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/220px-Venus_globe.jpg",
  ];
   var callback = () => api.sendMessage({body:`Venus (Venus) or Venus (Chinese: ), also known as Taibai (太白), Taibai Kim (太白金星), is the 2nd planet in the solar system, which revolves around itself with a period of time. period 224.7 Earth days. After the Moon, it is the brightest natural object in the dark sky, with an apparent magnitude of −4.6, bright enough to cast a shadow on the water's surface. Because Venus is the inner planet from Earth, it never appears in the sky too far from the Sun: the elongation peaks at 47.8°. Venus reaches its greatest brightness right near sunset or dawn, so folk also call it Evening star, when the planet appears at dusk, and Morning star, when this planet appears at dawn. bright.
Venus is classified as a terrestrial planet and is sometimes considered a "sister planet" to Earth due to its size, gravitational acceleration, and orbital parameters similar to Earth's. However, it has been shown that it is very different from Earth in other ways. Venus is surrounded by a thick layer of highly reflective clouds containing sulfuric acid, which makes it impossible to observe its surface under visible light wavelengths. The density of air in its atmosphere is the largest of the four terrestrial planets, composed mainly of carbon dioxide. Atmospheric pressure at the planet's surface is 92 times higher than that of Earth. With an average surface temperature of 735 K (462 °C), Venus is the hottest planet in the Solar System. It does not have a carbon cycle to return carbon to the surface rocks and soils, so it is impossible for any organic organism to absorb it in the biomass. Some scientists have suggested that Venus had oceans in the past, but evaporated as the planet's temperature increased due to the uncontrolled greenhouse effect. Water may have been photocatalysed, and because there is no planetary magnetosphere, free hydrogen could escape into space by the action of the solar wind. The entire surface of Venus is an arid desert of rock and dust and there are probably still active volcanoes on the planet..`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };