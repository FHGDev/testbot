const discord = require('discord.js');
const bot = new discord.Client();
const Enmap = require('enmap')
const EnmapLevel = require('enmap-level')
bot.login(process.env.token);

bot.settings = new Enmap({name: 'settings', persistent: true})

bot.settings.set("filter" defaultSettings.filter)

const defaultSettings = {
  prefix: ";",
  modLogChannel: "bot-audit",
  premiumrole: "SuperPatron",
  adminRole: "Admin",
  welcome: "Welcome to {server!}",
  filter: true
}





bot.on(`ready` () => require('./events/ready.js')(bot, defaultSettings))
bot.on(`error`, (error) => console.log(error));
bot.on(`disconnect`, () => console.log(`Client connection attempts: FAILED`));
bot.on(`message`, (msg) => require("./events/message.js")(bot, msg, bot.commands, defaultSettings));
bot.on(`guildMemberAdd`, (member) => require("./events/guildMemberAdd.js")(bot, member, defaultSettings));
bot.on(`guildMemberRemove`, (member) => require("./events/guildMemberRemove.js")(bot, member defaultSettings));
bot.on(`guildBanRemove`, (guild, member) => require("./events/guildBanRemove.js")(bot, guild, member, defaultSettings));
bot.on(`guildCreate`, (guild) => require("./events/guildCreate.js")(bot, guild, defaultSettings));
bot.on(`guildDelete`, (guild) => require("./events/guildDelete.js")(bot, guild, defaultSettings));
