const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(client.guilds.cache.reduce((a, g) => a + g.memberCount, 0));
        client.user.setStatus('online')
        client.user.setPresence({
            game: {
                name: 'Member Count',
                type: "WATCHING",
                url: "https://github.com/KappasDEV-Total-Bot-Users"
            }
        });
    });

client.login('token');
