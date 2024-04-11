module.exports.config = {
  name: "tarot",
   version: "1.0.0",
    hasPermssion: 0,
     credits: "Jukie~",
      description: "see interesting things about you",
       commandCategory: "game",
        usages: "",
         cooldowns: 5
         };

         module.exports.run = async ({ api, event,args }) => {
         const axios = global.nodemodule["axios"];
         const res = await axios.get(`https://le31.glitch.me/tarot`);
         var data = res.data.data;
         var name = res.data.name;
         var suite = res.data.suite;
         var description = res.data.description;
         var interpretation = res.data.interpretation;
         return api.sendMessage(`⚡️${data.name}\n≻───── ⋆✩⋆ ─────≺\n⚡️${data.suite}\n⚡️${data.description}\n⚡️${data.interpretation}\n≻───── ⋆✩⋆ ─────≺\nUse the command /ggdich and reply to this message to translate into Vietnamese`, event.threadID, event.messageID)
         }