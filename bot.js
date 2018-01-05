const discord = require('discord.js');
const bot = new discord.Client();
bot.login(process.env.token);
const sql = require("sqlite")
sql.open("./score.sqlite")

sql.get(`SELECT * FROM scores WHERE userId = "${message.author.id}" `).then(row => {
  
}).catch(() => {
  console.error; // Gotta log those errors
  sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
    sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    if (!row) {
      sql.run()
    }
  })
})



bot.on("ready" () => require('./events/ready.js')(bot))
bot.on(`error`, (error) => console.log(error));
bot.on(`disconnect`, () => console.log(`Client connection attempts: FAILD`));
bot.on(`message`, (msg) => require("./events/message.js")(bot, msg, bot.commands));
bot.on(`message`, (msg) => require("./musicbot/musicHandle.js")(bot, msg));
bot.on(`guildMemberAdd`, (member) => require("./events/guildMemberAdd.js")(bot, member));
bot.on(`guildMemberRemove`, (member) => require("./events/guildMemberRemove.js")(bot, member));
bot.on(`guildBanRemove`, (guild, member) => require("./events/guildBanRemove.js")(bot, guild, member));
bot.on(`guildCreate`, (guild) => require("./events/guildCreate.js")(bot, guild));
bot.on(`guildDelete`, (guild) => require("./events/guildDelete.js")(bot, guild));
