const{token} = require('./config.json');
const{Client, GatewayIntentBits} = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });
client.on('clientReady', () => {
	console.log(`Bot is online as ${client.user.tag}`);
});

client.login(token);
