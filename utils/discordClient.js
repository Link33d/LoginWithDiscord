const Discord = require('discord.js');

const client = new Discord.Client({intents: ['GUILDS', 'GUILD_PRESENCES', 'GUILD_MESSAGES' ,'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES']})

client.login(process.env.TOKEN);

module.exports = client