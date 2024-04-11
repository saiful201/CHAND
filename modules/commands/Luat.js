module.exports.config = {

    name: "the law",

    version: "1.0.1",

    hasPermssion: 0,

    credits: "ProCoderMew",

    description: "group law",

    commandCategory: "noprefix",

    usages: "",

    cooldowns: 0

};

module.exports.handleEvent = ({ event, api }) => (event.body.toLowerCase() == "luật") ? api.sendMessage("1. Enter the box to know how to interact.\n2. in the box do not cause war with everyone.\n3. Do not spam ib/bot.\n4. Do not spam links in the group.\n5. Do not send content over 18+, images of violence, gore, disgusting pigs.\n6. Use Vietnamese with clear meaning, accent or use English.\n7. Do not exchange/trade anything without permission from QTV\n8. Do not mention/recommend any products that do not belong elsewhere without the permission of the administrator.\n9. Don't make the Bot/I mad.\n10. Don't make QTV angry.\n11. Repeat the whole thing above.", event.threadID, () => api.sendMessage("❌You have 2 warnings❌ \n3rd time eating kick :)))", event.threadID)) : '';

module.exports.run = () => {}
