// Hãy quên việc đổi credit. Tôn trọng nhau xíu đi :)
module.exports.config = {
  name: "ditbu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PhucXT",
  description: "Radom vài thứ con trai thích",
  commandCategory: "Ngắm ghệ ditbu",
  usages: "ditbu",
  cooldowns: 0,
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
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/s320x320/261454385_120130583802206_4563820406693173751_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=Bj4KceVU3KoAX93ZbU4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=95da160099f8c87ce7a65fda598f9089&oe=61A49E18",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261025070_120130420468889_5527497637602185082_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=xg7EQWnVZq8AX9oeWhc&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=514ce5acf73e8ab92571f94a6d0f19de&oe=61A5F0A4",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261137058_120130253802239_3061241618928418558_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=lwQONRobOkAAX8suuX9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=e9ee1e829d4e1872820cf615746bd81d&oe=61A4EA01",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/260929834_120130087135589_3911190303149316149_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=IWgaO0i0APwAX_ZVEsj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=1ca6615faaaf671c215f343ced9755f9&oe=61A6755F",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261411467_120129903802274_7453288363584020185_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=EhfL5EJ7EgEAX_dMwCv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=43c1dd0a5a811414e7bf8ecfeae13ecd&oe=61A64DE3",
"https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/260819132_120127313802533_7661960755014539246_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=zQR0FgKcO78AX-R9xd_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=747cfcb391294b061a70fad0606cb466&oe=61A5A864",
"https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/c0.0.540.540a/261050843_120127150469216_2050117164499923194_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=GnoGU14w-PUAX_VKFfz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn3-1.fna&oh=27f69c5b1a8545d7f83dcc3e9031124d&oe=61A5A564",
"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/c0.0.480.480a/p480x480/261516160_103365562186598_4522159007420977675_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=BKtyq2SX77EAX-5-kvN&_nc_oc=AQmBwPiFhF_gQljWQYwJPF4evaxbUuU5suDoxjtqjk_aO1BIp7D3MnplLp9bqPwPIuTxaLlTmJmn9C3QSTynJHad&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=ff6dbe1442cb6d3382f98cc86e72b2a7&oe=61A51362",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/261145428_103365035519984_1786328137175525903_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=4dIlgo8y3zwAX88ZlIH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=24dc793078b92c01d774f7f0d522c622&oe=61A66B42",
"https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261126688_103364895519998_2414565606766688714_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=9o49fJmZPgUAX-b26QC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn3-1.fna&oh=b74a41973c91d1ea82d5e999c4212dce&oe=61A5689B",
"https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261666362_103364668853354_1863918947788131135_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=FyXlSORm4F8AX9kBehu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=0401cf27ba8e352fe73f7ff5abcd2fa6&oe=61A587B7",
"https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261508347_103364418853379_6102643556189336108_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=fnhPtA_h57cAX_Fy8hm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=0ed3cc5c363d436253c146d910d76d27&oe=61A5C776",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261084351_103361765520311_2943578894635745264_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=-VDjJ4KrKjEAX_0zRNX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=a1c5a3625722167ae0e0bfa124ae8dad&oe=61A53053",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/260902470_103361678853653_2498636140126325033_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=SV19yhNoEnoAX-kG6oy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=3fb00a0032edaa357295e7ffabe9fca0&oe=61A5E306",
"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/c0.0.653.653a/260953261_103360962187058_1848202990941324023_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=4qFvVNyvg2sAX-X2bpZ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=3b7dc54c028441db15bfe870b369d855&oe=61A60623",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/c0.3.720.714a/261338019_120147790467152_4880784756974621820_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=h0g6HXENUpkAX9RYg8Y&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=ebfc888fe8854569cec36e8587103729&oe=61A531FC",
"https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/c0.64.606.606a/261084487_120147630467168_3392946501249577734_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=A0uyNZlVrdYAX8mjasg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=348b4a313d74c04f0b370e23fbb3b8d8&oe=61A59CCB",
"https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/c4.0.712.720a/261432383_120147203800544_7403529164521484270_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=lb91RWo44KYAX_2K0Tu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=1fdc5624341adbb3152b2eec7e5f124d&oe=61A67826",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/c0.0.720.718a/261311370_120147037133894_8548638412669762480_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=1Kj8ce8-XS0AX9W0ZAv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=b782ef9aaf979a6bc8c8ecb526b1cf2b&oe=61A54E9D",
"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/c0.4.720.712a/261083634_120146947133903_7164703804807640770_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=UXrRXL5PLhIAX8O_xJq&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=c3c30552b051bd70875d2feb95e74d8c&oe=61A65BED",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/c0.2.720.716a/261110857_120146827133915_683149812857090074_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=BT6LDUBbpdMAX_0XgdQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=314b77e847adcea361e9f9cbd8f4b398&oe=61A623BC",
"https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261383116_120146427133955_6567988263852503086_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=sVasFwu7s40AX_3aLP7&_nc_oc=AQlOolU3bTQFSTpu-tSO-W5-dn6cq1dWmy3v-LgzP2_yPjSEUYMUmkTraalQm9Xk7oevXNw7N9zap6EWNUK_wT0D&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=f1244af237239bcc8e26c2bab4b52dae&oe=61A6566C",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/c0.40.720.712a/261646386_120145493800715_5108703775092318451_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=tB7qiS8VrxkAX9ycx_V&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=1a7a77ae92a511cfeb3755f6e3677c82&oe=61A4FE18",
"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/260855020_120144807134117_732679118151963591_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=PVTUnwoCnK4AX_mtTLx&_nc_oc=AQmWPSruaYaZLbDgBqfQU55tdZeTE1dnUQ0CgpSZznd0fy2m1_00MDl5R9vYrWPAEm0CAc2JjIG0Fqjmw87m0db2&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=0ad177b0233c0d3b874d334ff726a466&oe=61A5881F",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261125056_120144560467475_3322786718552453440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=qT-sCVo0LAwAX-fCC_0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=e80a951dda795a1bad060370b7440c31&oe=61A52480",
"https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/c5.0.710.720a/261375843_120141927134405_1440066830528646222_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=pJ8nFptoW-sAX-t4Eac&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn3-1.fna&oh=2353db343282095cec28ae8ebdfba7a9&oe=61A5739A",
"https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261562766_120141717134426_7173846776977921394_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=ShP2yZZIjuQAX9d4LKP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn3-1.fna&oh=d9018e4a2e3bdfa33dc10b26175caf5d&oe=61A62DDA",
"https://scontent.fsgn8-1.fna.fbcdn.net/v/t39.30808-1/c5.0.710.720a/260966463_120141593801105_1656742522334620459_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=zzpHiyRUMuAAX93CRle&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=33336c00108e46f28a3ef952f4236f56&oe=61A51E38",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/s720x720/260936876_120141423801122_5480830099080248401_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=WdP-EzlflysAX_b5m2M&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=dcc8ad5d7fdfb6ae3374b3e75900614f&oe=61A6195F",
"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/260469439_120141147134483_7211281927845682025_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=Vlx1wR0jlzYAX972Scc&_nc_oc=AQl9YmISmaYNoJyasvsIEtyifW__iUlNR3xi84BQx4F96-2LAh-GHw1sdOFdaNotACdWo3o10KiAEDA8D--h3KAC&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=f469989b01195093fe7e1ff11e679c7a&oe=61A4CC33",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/c0.0.720.719a/260982502_120140803801184_8821181905918754584_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=IKhxrKd5ZO4AX89bu3d&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=07fb3e054e8d1f6ce80c8c3fc2f056d9&oe=61A5EAC7",
"https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-1/c0.4.720.712a/261184151_120140317134566_8318191282452885758_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=sR7-3chaB4IAX8vKZOd&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-2.fna&oh=9a4349a2636375d50c9a21ca6550c1e1&oe=61A537A7",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/260982117_120139520467979_7179478487243832331_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=Kaj74A_8KuUAX_aThQ5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=44f81a564483b8d1498d10622a10507d&oe=61A66F3D",
"https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/c5.0.710.720a/261375843_120141927134405_1440066830528646222_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=pJ8nFptoW-sAX-t4Eac&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn3-1.fna&oh=2353db343282095cec28ae8ebdfba7a9&oe=61A5739A",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261125056_120144560467475_3322786718552453440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=qT-sCVo0LAwAX-fCC_0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=e80a951dda795a1bad060370b7440c31&oe=61A52480",
"https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/s720x720/260936876_120141423801122_5480830099080248401_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=WdP-EzlflysAX_b5m2M&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn4-1.fna&oh=dcc8ad5d7fdfb6ae3374b3e75900614f&oe=61A6195F",
"https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-1/c0.0.720.720a/261125056_120144560467475_3322786718552453440_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=0c64ff&_nc_ohc=qT-sCVo0LAwAX-fCC_0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-2.fna&oh=e80a951dda795a1bad060370b7440c31&oe=61A52480",
  ];
  var callback = () => api.sendMessage({body:`Ghệ đitbu suốt ngày vậy bạn ? Ủa alo ? 🤨`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
