const discord = require('discord.js');
const bot = new discord.Client();
const Enmap = require('enmap')
const Rethink = require('enmap-rethink')
const provider = new Rethink({name: "settings"})
bot.login(process.env.token);
bot.settings = new Enmap({name: 'settings', persistent: true});

const defaultSettings = {
  prefix: ":",
  modLogChannel: "mod-log",
  filter: true,
  adminRole: "Admin",
  welcomeMessage: "Say hello to {{user}}, everyone! We all need a warm welcome sometimes :D"
}

const gsettings {
  
}

bot.on("guildCreate", guild => {
  bot.settings.set(guild.id, defaultSettings);
});
