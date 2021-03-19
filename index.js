const { Client } = require("discord.js");
const { Readable } = require("stream");
const bot = new Client();

bot.on('message', message => {
	var text = message.content;
	message.channel.send({
                files: [{
		  attachments: (() => new Readable.from(text.toString()))(),
		  name: `${message.author.name}.txt`
                }]
	}).catch(console.error);
});
bot.login("Y o u r  b o t  t o k e n").then(() => console.log("Ready")).catch(console.error);
