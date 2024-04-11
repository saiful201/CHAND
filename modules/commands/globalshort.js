module.exports.config = {
	name: "globalshort",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "CatalizCS",
	description: "Better version of short",
	commandCategory: "system",
    usages: "[all/delete/empty]",
	cooldowns: 5,
	dependencies: {
		"fs-extra": "",
        "path": ""
	}
}

module.exports.onLoad = function () {
    const { existsSync, writeFileSync, mkdirSync, readFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, "cache", "shortcutglobal.json");
    const pathGif = resolve(__dirname, "cache", "shortcutGif");

    if (!global.moduleData.shortcuts) global.moduleData.shortcuts = [];

    if (!existsSync(path)) writeFileSync(path, JSON.stringify([]), "utf-8");
    if (!existsSync(pathGif)) mkdirSync(pathGif, { recursive: true });

    const data = JSON.parse(readFileSync(path, "utf-8"));

    global.moduleData.shortcuts = data;

    return;
}

module.exports.handleEvent = async function ({ event, api, Users }) {
    const { threadID, messageID, body, senderID } = event;
    if (!global.moduleData.shortcuts) global.moduleData.shortcut = [];
    if (global.moduleData.shortcuts.length == 0) return;
    const data = global.moduleData.shortcuts;

    if (data.some(item => item.input == body)) {
        const { resolve } = global.nodemodule["path"];
        const { existsSync, createReadStream } = global.nodemodule["fs-extra"];
        const dataThread = data.find(item => item.input == body);
        const path = resolve(__dirname, "cache", "shortcutGif", `${dataThread.id}.gif`);
        
        var object, output;
        var output = dataThread.output;
        if (/\{name}/g.test(output)) {
            const name = global.data.userName.get(senderID) || await Users.getNameUser(senderID);
            output = output.replace(/\{name}/g, name);
        }
        
        if (existsSync(path)) object = { body: output, attachment: createReadStream(path) }
        else object = { body: output };
        
        return api.sendMessage(object, threadID, messageID);

    }
}

module.exports.handleReply = async function ({ event, api, handleReply }) {
    if (handleReply.author != event.senderID) return;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const { threadID, messageID, senderID, body } = event;
    const name = this.config.name;

    const path = resolve(__dirname, "cache", "shortcutglobal.json");

    switch (handleReply.type) {
        case "requireInput": {
            if (body.length == 0) return api.sendMessage("「Shortcut」Answer cannot be blank!", threadID, messageID);
            const data = global.moduleData.shortcuts;
            if (data.some(item => item.input == body)) return api.sendMessage("「Shortcut」Input already exists!", threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("「Shortcut」Reply this message to enter the answer using keywords", threadID, function (error, info) {
                return global.client.handleReply.push({
                    type: "requireOutput",
                    name,
                    author: senderID,
                    messageID: info.messageID,
                    input: body
                });
            }, messageID);
        }
        case "requireOutput": {
            if (body.length == 0) return api.sendMessage("「Shortcut」Answer cannot be blank!", threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("「Shortcut」Reply this message to enter the answer using keywords 's'", threadID, function (error, info) {
                return global.client.handleReply.push({
                    type: "requireGif",
                    name,
                    author: senderID,
                    messageID: info.messageID,
                    input: handleReply.input,
                    output: body
                });
            }, messageID);
        }
        case "requireGif": {
            const id = global.utils.randomString(10);
            if (body.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:gif|GIF)/g)) {
                const pathGif = resolve(__dirname, "cache", "shortcutGif", `${id}.gif`);
                try {
                    await global.utils.downloadFile(body, pathGif);
                } catch (e) { return api.sendMessage("「Shortcut」The file could not be downloaded because the url does not exist or the bot has a network problem!", threadID, messageID); }
            }
            
            const readData = readFileSync(path, "utf-8");
            var data = JSON.parse(readData);
            const object = { id, input: handleReply.input, output: handleReply.output };

            data.push(object);

            global.moduleData.shortcuts = data;
            writeFileSync(path, JSON.stringify(data, null, 4), "utf-8");

            return api.sendMessage(`「Shortcut」New shortcut successfully added, here is the overview:\n- ID: ${id}\n- Input: ${handleReply.input}\n- Output: ${handleReply.output}`, threadID, messageID);
        }
    }
}

module.exports.run = function ({ event, api, args }) {
    const { readFileSync, writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const { threadID, messageID, senderID } = event;
    const name = this.config.name;

    const path = resolve(__dirname, "cache", "shortcutglobal.json");

    switch (args[0]) {
        case "remove":
        case "delete":
        case "del":
        case "-d": {
            const readData = readFileSync(path, "utf-8");
            var data = JSON.parse(readData);
            if (data.length == 0) return api.sendMessage("「「Shortcut」currently no shortcut has been set!", threadID, messageID);
            var indexNeedRemove;

            if (isNaN(args[1])) indexNeedRemove = args[1];
            else indexNeedRemove = data.findIndex(item => item.input == (args.slice(1, args.length)).join(" ") || item.id == (args.slice(1, args.length)).join(" "));
            
            data.splice(indexNeedRemove, 1);
            global.moduleData.shortcuts.splice(indexNeedRemove, 1);

            writeFileSync(path, JSON.stringify(data, null, 4), "utf-8");

            return api.sendMessage("「Shortcut」Successfully deleted!", threadID, messageID);
        }

        case "list":
        case "all":
        case "-a": {
            const data = global.moduleData.shortcuts;
            var array = [];
            if (data.length == 0) return api.sendMessage("「Shortcut」currently no shortcut has been set!", threadID, messageID);
            else {
                var n = 1;
                for (const single of data) {
                    const path = resolve(__dirname, "cache", "shortcutGif", `${single.id}.gif`);
                    var existPath = false;
                    if (existsSync(path)) existPath = true;
                    array.push(`${n++}/ ${single.input} => ${single.output} (${(existPath) ? "YES" : "NO"})`);
                }
                return api.sendMessage(`「Shortcut」Here is the full shortcut::\n[stt]/ [Input] => [Output] (exist gif)\n\n${array.join("\n")}`, threadID, messageID);
            }
        }

        default: {
            return api.sendMessage("「Shortcut」Reply this message to enter keywords for the shortcut", threadID, function (error, info) {
                return global.client.handleReply.push({
                    type: "requireInput",
                    name,
                    author: senderID,
                    messageID: info.messageID
                });
            }, messageID);
        }
    }   
}