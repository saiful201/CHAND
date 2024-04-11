module.exports.config = {
    name: "curse",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "...",
    description: "Continuously tag the person you tag for 5 times\nYou can call that person's soul",
    commandCategory: "group",
    usages: "curse @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Need to tag 1 friend you want to curse          ", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Start cursing !");
setTimeout(() => {a({body: "kupal" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Hakdog ka hahah" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Hampas lupa" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "potaena mo" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "bobo mo" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "isa kang hakdog bitch" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "palamunin ka sa inyo" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "gold kaba huh? " + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "EDI WOW ! POTANG INA HAHAHA POTCHA" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "wal kang kwenta" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "hindi ka mahal ng magulang mo " + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Your father shot you to death by rapping" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Do you still dare to come out?" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Then please listen to me rapping and fuck your family" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Before that, please give me a break for 1 minute" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Please allow me to start" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "First of all, I would like to fuck you from top to bottom" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "I fuck from cunt hole to pussy cleavage" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "The cunt is as big as a buffalo cunt masturbating a sewer pipe" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "I'm sure 2 guys like me aren't enough to fill your ass hole" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("I'm tired")} , 90000);
setTimeout(() => {a({body: "admin kung want mong mang curse ulit icommand mo lang ulet ako" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Thank you for listening to my curse" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Goodbye" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("babush🥺")} , 110000);


  
  }