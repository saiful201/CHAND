/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "traidat",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Information about the planets in the solar system",
  commandCategory: "Solar System",
  usages: "traidat",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/599px-The_Earth_seen_from_Apollo_17.jpg",
  ];
   var callback = () => api.sendMessage({body:`Earth or Earth (Chinese: , English: Earth), is the third planet from the Sun, and is also the largest planet in the solar system's terrestrial planets in terms of radius, mass and density of matter. Earth, also known as the "blue planet", is home to millions of species of living things, including humans, and so far it is the only place in the universe known to have life. This planet was formed 4.55 billion years ago and life appeared on its surface about 1 billion years ago. Since then, the Earth's biosphere, atmosphere and other inorganic conditions have changed dramatically, facilitating the proliferation of aerobic microorganisms as well as the formation of the ozone layer- This important layer of protection, along with the Earth's magnetic field, blocks harmful radiation and shelters life. The physical features of the Earth, as well as the geographical or orbital history, allowed life to exist in the past. It is estimated that the Earth can only support life for another 1.5 billion years, before the Sun's size increases (it becomes a red giant) and destroys all life. The land is divided into tectonic plates, which move slowly across the Earth's surface over millions of years. About 71% of the Earth's surface is covered by saltwater oceans, with the remainder being continents and islands. Water is an essential ingredient for life and so far humans have not found its existence on the surface of any other planet except Mars, which has frozen water at the poles. However, there is evidence to confirm that water existed on Mars in the past, and may exist to this day. The core of the still active Earth is surrounded by a thick solid mantle layer, a liquid outer core that generates a magnetic field, and a solid iron inner core. Earth interacts with other objects in space including the Sun and Moon. Currently, the time it takes the Earth to complete one revolution around the Sun is 365.2564 times the time it takes it to rotate once around its axis. This period is equal to a sidereal year or 365.2564 days in the solar calendar. The Earth's axis of rotation is tilted at an angle of 23.44° with respect to the axis perpendicular to the plane of the orbit, producing a seasonal change in the Earth's surface during a tropical year. The Moon, Earth's only natural satellite, and also the main cause of ocean tides, began orbiting the Earth 4.53 billion years ago, still keeping its original rotation. over time but is slowing down. Between 4.1 and 3.8 billion years ago, the collisions of meteorites during the "Late Strong Strike" caused significant changes in the Moon's surface.
Both mineral resources and products of the Earth's biosphere are used to support human life. The population is divided into more than hundreds of independent countries, related to each other through diplomacy, tourism, trade, and military activities. Human culture has evolved to create many ways of looking at the Earth including the personification of Earth as a god, a belief in a flat Earth or the Earth as the center of the universe, and a view of the Earth. A more modern look like the Earth is a unified environment that needs direction.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };