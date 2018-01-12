const discord = require('discord.js');
const bot = new discord.Client();
const Enmap = require('enmap')
const EnmapLevel = require('enmap-level')
const pak = require('./package.json')
bot.login(process.env.token);
bot.settings = new Enmap({name: 'settings', persistent: true});

const defaultSettings = {
  prefix: "t!",
  modLogChannel: "bot-audit",
  filter: true,
  adminRole: "Admin",
  welcomeMessage: "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D"
}

bot.on("ready", () => {
	bot.user.setGame(`t!help | ${bot.guilds.array().length} servers`)
	console.log(`${bot.user.username} v${pak.version} is ready!`)
	bot.guilds.forEach((guild, id => {
		console.log(`[SERVER] [${guild.memberCount}] ${guild.name} ($guild.id}) | Joined: ${guild.joinedAt.toString()}
	})
});

bot.on("guildCreate", guild => {
  bot.settings.set(guild.id, defaultSettings);
});

bot.on("guildDelete", guild => {
	bot.settings.delete(guild.id)
})

bot.on("guildMemberAdd", member => {
	defaultSettings.welcomeMessage.replace("{{user}}", member.displayName)
})

