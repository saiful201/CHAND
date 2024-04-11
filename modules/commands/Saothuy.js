/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "Mercury",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Information about the planets in the solar system",
  commandCategory: "Solar System",
  usages: "Mercury",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/300px-Mercury_in_color_-_Prockter07_centered.jpg",
  ];
   var callback = () => api.sendMessage({body:`Mercury (Mercury) or Mercury (Chinese: 水星) is the smallest and closest planet to the Sun of the eight planets in the Solar System, with an orbital period equal to 88 Earth days. Viewed from Earth, the planet appears with an orbital conjunction period of approximately 116 days, and is much faster than the other planets. This fast speed led the Romans to name the planet Mercurius, the god of quick communication and messenger. In Greek mythology the name of this god is Hermes (Ερμής). The Vietnamese name of this planet is based on the name given by China, chosen according to the water element in the five elements.
Because the planet has virtually no atmosphere to retain heat, Mercury's surface experiences the largest temperature variation of any of the planets, varying from 100 K (−173 °C; −280 °F). during the day to 700 K (427 °C; 800 °F) during the day. Mercury's axis of rotation has the smallest inclination in the Solar System (about 1⁄30 degrees), but the planet has the largest orbital eccentricity. At orbital apogee, Mercury is 1.5 times farther from the Sun than the planet at perihelion. The surface of the planet has many craters that look like the surface of the Moon, and the planet was no longer geologically active billions of years ago.
On Mercury, there is no seasonal variation in weather like on other planets because it does not have a significant atmosphere. The planet is tidally locked to the Sun so it rotates in a very different orbit than the other planets. Using fixed stars as its reference point, it rotates exactly three times in two orbits around the Sun. When viewed from the Sun, in a reference frame that rotates with orbital motion, the planet appears to rotate around its axis only once in two Mercury "years". So if people are standing on Mercury they only see 1 day in 2 years.
Because Mercury's orbit lies within the orbit of Earth (and of Venus), when viewed from Earth the planet sometimes appears in the morning or at night, but is never visible at midnight. . Similar to Venus and the Moon, the planet also has observed phases as it moves in orbit. Mercury does not have a natural satellite. Mercury's apparent magnitude varies from −2.0 to 5.5; But because it is so close to the Sun, it is very difficult to observe this planet through a telescope and is rarely done.
Two spacecraft have visited Mercury: Mariner 10 in 1974 and 1975; and MESSENGER, launched in 2004, orbited Mercury more than 4,000 times over four years before running out of fuel and crashing to the planet's surface on April 30, 2015.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };