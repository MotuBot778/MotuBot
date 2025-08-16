const fs = require("fs");
module.exports.config = {
	name: "jani",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "JAMAL", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("MISS") ||
     react.includes("miss") || react.includes("चूमा") || react.includes("miss") ||
react.includes("miss you babu") ||
react.includes("MISS YOU")) {
		var msg = {
				body: `【 𝐈 𝐌𝐈𝐒𝐒 𝐘O𝐔 𝐓O 𝐌𝐄𝐑𝐈 𝐉𝐀𝐍____😙🙃 】`,attachment: fs.createReadStream(__dirname + `/noprefix/kissyou.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
