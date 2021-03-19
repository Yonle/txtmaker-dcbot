const { Client } = require("discord.js");
const bot = new Client();

bot.on('message', message => {
	var text = message.content;
	message.channel.send({
                files: [{
		  attachments: new Buffer.from(text),
		  name: `${message.author.name}.txt`
                }]
	}).catch(console.error);
});
bot.login("Y o u r  b o t  t o k e n").then(() => console.log("Ready")).catch(console.error);
