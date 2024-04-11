/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "mars",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Information about the planets in the solar system",
  commandCategory: "Solar System",
  usages: "mars",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  ];
   var callback = () => api.sendMessage({body:`Mars or Mars (Chinese: 火星, English: Mars) is the fourth planet from the Sun in the Solar System. It is often referred to as the "Red Planet", because iron oxides are so abundant on the planet's surface that the surface appears red. Mars is a rocky planet with a thin atmosphere, whose surface features resemble both the craters on the Moon and the volcanoes, valleys, deserts and ice caps at the upper poles of Mars. Earth. The rotation period and the periodicity of the seasons on Mars are quite similar to those of Earth due to the tilt of the axis of rotation. On Mars there are Mount Olympus Mons, the tallest mountain in the Solar System, and the Valles Marineris canyon, the longest and widest canyon in the Solar System. The flat Northern Hemisphere Borealis Basin covered up to 40% of the red planet's surface and was possibly a giant impact crater in the past. Until Mariner 4 made its first flyby of Mars in In 1965, there was much speculation about the presence of liquid water on the surface of this planet. They are based on observations of cyclic variations in the brightness and darkness of places on the planet's surface, particularly at polar latitudes, which are characterized by seas and continents; The long, dark stripes were originally thought to be irrigation channels containing liquid water. These lines were later interpreted as optical illusions, although geological evidence collected by space probes suggests that Mars was likely once covered by liquid water. wide at its surface. In 2005, radar data showed the presence of large amounts of frozen water at the poles, and in mid-latitude pools. The self-propelled robot Spirit obtained samples of chemical compounds containing water molecules in March 2007. The Phoenix lander directly sampled frozen water in the shallow surface layer on July 31, 2008. Mars has two moons: Phobos and Deimos, which are small and irregular moons. These may be asteroids captured by Mars, similar to 5261 Eureka - a Mars Troy asteroid. There are currently three active orbiters orbiting Mars: the Mars Odyssey, the Mars Express, and the Mars Reconnaissance Orbiter. On its surface are the defunct Mars Exploration Rover Opportunity and its decommissioned Twin Spirit rover, along with the rovers and rovers in the rover. past—both successful and unsuccessful. The Phoenix lander completed its mission in 2008. Observations by the decommissioned NASA Mars Global Surveyor orbiter showed evidence of a shrinking and expanding displacement of the northern polar ice cap. seasons. NASA's Mars Reconnaissance Orbiter has obtained images showing the possibility of water runoff during the hottest months on Mars. Mars is easily visible from Earth with the naked eye. Its apparent magnitude of −3.0 is second only to Jupiter, Venus, Moon, and Sun..`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };