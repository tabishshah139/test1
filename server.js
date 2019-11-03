const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://github.com/tabishshah139/test1`);
}, 280000);

const Discord = require ('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN
const usedCommandRecently4 = new Set();

const PREFIX = '?';

bot.on('ready', () =>{
console.log(`K-G3n is now online in ${bot.guilds.size} servers with ${bot.users.size} members!`);
bot.user.setStatus('dnd, online, idle');
bot.user.setActivity(`on ${bot.guilds.size} servers | !help | !invite `);
});

bot.on('message', function(message) {
    if (message.content == "!cleanmsg") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("You do NOT have permission.")})                        
        }
    }

});

bot.on('message', message =>{
  if (message.content === '!statsupdate') {
   bot.user.setActivity(`${bot.guilds.size} servers | !help | Invite  `);
    message.channel.send("**The stats have been updated!**")
   }
});

bot.on('message', message =>{
  if (message.content === '!botstats') {
   message.channel.send(`${bot.guilds.size} servers with ${bot.users.size} members!`)
   }
}); 

bot.on('message', message =>{
  if (message.content === '!invite') {
   message.channel.send(`Invite link of KGEN has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=631558128605069395&permissions=8&scope=bot");
   }
}); 

bot.on("message", message => {
    if (message.content === ("!help")) {
message.channel.send("**Help has been sent on DMs!**")
     const embed = new Discord.RichEmbed()
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
     !stock

[Bot made by KiWi, click here to join!](https://discord.gg/GumccbM)
              
       `)
 
   message.author.sendEmbed(embed)
   
   }
   });

bot.on('message', message =>{
    if (!message.guild) return
    if (message.content === '!stock'){
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            fields: [{
                name: "**Hulu**",
                value: "Stock:600   || !hulu"
              },
              {
                name: "**Spotify**",
                value: "Stock:665  ||  !spotify"
              },
              {
                name: "**Pornhub**",
                value: "Stock:852  ||  !pornhub"
              },
              {
                name: "**NordVPN**",
                value: "Stock:640  ||  !nordvpn"
              },
              {
                name: "**CrunchyRoll**",
                value: "Stock:733 ||  !crunchyroll"
              },
              {
                name: "**uPlay**",
                value: "Stock:1600  ||  !uplay"
              },
              {
                name: "**Deezer**",
                value: "Stock:2495  ||  !deezer"
              },
              {
               name: "**Nitro**",
                value: "Nitro:190054 !nitro"
              },
              {
                name: "**Origin**",
                value: "Stock:4924  || !origin"
              },
              {
                  name: "**Fortnite**",
                value: "Stock:1046   || !fortnite"
              },
              {
                  name: "**Minecraft**",
                value: "Stock:445  || !minecraft"
              },
              {
                  name: "**Mailaccess**",
                value: "Stock:10495  || !mailaccess"
              },
              {
                  name: "**PUBG**",
                value: "Stock:300  || !pubg"
              },
              {
                  name: "**WWE**",
                value: "Stock:783  || !wwe"
              },
              {
                  name: "**Mega.nz**",
                value: "Stock:441 || !mega"
              },
              {    
                  name: "**Join Kiwi Lounge**",
                value: "https://discord.gg/GumccbM"
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: bot.user.avatarURL,
              text: "Bot made by KiWi#7118"
            }
          }
        });
    };
});

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!pubg'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `tabishshah139@gmail.com:wwewwfwwc`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join kiwi Lounge** https://discord.gg/GumccbM");
     message.author.send({embed: {
        color: 3447003,
        description: `**MEGA** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "MEGA account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '!hulu'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 60000)
    var string = `fobgirl80@gmail.com:il0veyou`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join kiwi Lounge** https://discord.gg/GumccbM");
     message.author.send({embed: {
        color: 3447003,
        description: `**Hulu** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Hulu account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});
bot.login(TOKEN);
