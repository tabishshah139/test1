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
bot.user.setActivity(`on ${bot.guilds.size} servers | +help | +invite `);
});

bot.on('message', function(message) {
    if (message.content == "+cleanmsg") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("You do NOT have permission.")})                        
        }
    }

});

bot.on('message', message =>{
  if (message.content === '+statsupdate') {
   bot.user.setActivity(`${bot.guilds.size} servers | +stocks | +Invite  `);
    message.channel.send("**The stats have been updated!**")
   }
});

bot.on('message', message =>{
  if (message.content === '+botstats') {
   message.channel.send(`${bot.guilds.size} servers with ${bot.users.size} members!`)
   }
}); 

bot.on('message', message =>{
  if (message.content === '+invite') {
   message.channel.send(`Invite link of KGEN has sent to your **DMs** :white_check_mark:`)
message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=619923933109420097&permissions=0&scope=bot");
   }
}); 

bot.on("message", message => {
    if (message.content === ("+help")) {
message.channel.send("**Help has been sent on DMs!**")
     const embed = new Discord.RichEmbed()
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`
     !stock

[Bot made by Paul_Walker, click here to join!](https://discord.gg/zGTR2Ra)
              
       `)
 
   message.author.sendEmbed(embed)
   
   }
   });

bot.on('message', message =>{
    if (!message.guild) return
    if (message.content === '+stock'){
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: bot.user.username,
              icon_url: bot.user.avatarURL
            },
            fields: [{
                name: "**Minecraft**",
                value: "Stock:445   || +minecraft"
              },
              {
                name: "**Spotify**",
                value: "Stock:779  ||  +spotify"
              },
              {
                name: "**MailAccess**",
                value: "Stock:730 ||  +mailaccess"
              },
              {
                name: "**Crunchyroll**",
                value: "Stock:201 ||  +crunchyroll"
              },
              {
                name: "**Origin**",
                value: "Stock:230 ||  +origin"
              },
              {
                name: "**UncheckedNitroCodes**",
                value: "Stock:970 ||  +nitro"
              },
              {
                name: "**Netflix**",
                value: "Stock:870 ||  +netflix"
              },
              {

               name: "**Nordvpn**",
                value: "Stock:500 || +nordvpn"
              },
              {  
                  name: "**Join Tabish Gen Official CM**",
                value: "https://discord.gg/zGTR2Ra"
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: bot.user.avatarURL,
              text: "Bot made by Paul_Walker"
            }
          }
        });
    };
});
bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+origin'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `Note: We have added Little Advertisement. You Can Get more more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://up-to-down.net/41622/origin101 ) 74x Origin Accounts list 1. :two: ( https://link-to.net/41622/origi2 ) 60x Origin Accounts list 2`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Origin Account** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Origin account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});
bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+crunchyroll'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time .Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://link-to.net/41622/crunchy1 ). 60x Crunchyroll Accounts list 1 :two: ( https://link-to.net/41622/crunch2 ). 67x Crunchyroll Accounts list 2`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Crunchyroll Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Crunchyroll accounts sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+mailaccess'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://link-to.net/41622/mailacc1 ) 100x Mail Access Accounts list 1. :two: ( https://link-to.net/41622/mail2 ) 100x Mail Access Accounts list 2. :three: ( https://link-to.net/41622/mailaccu3 ) 150x Mail Access Accounts list 3. :four: ( https://link-to.net/41622/mailaccc4 ) 150x Mail Access Accounts list 4`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Mail Access Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Mail Access accounts sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+netflix'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 30000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://link-to.net/41622/netflixe ) 200x Netflix Accounts list 1. :two: ( https://link-to.net/41622/netfl2 ) 200x Netflix Accounts list 2. :three: ( https://link-to.net/41622/netfli3 ) 200x Netflix Accounts list 3. :four: ( https://link-to.net/41622/netfliee4 ) 260x Netflix Accounts list 4. :five: ( https://link-to.net/41622/nefliexx5 ) 303x Netflix Accounts list 4`;

   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Netflix  Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Netflix accounts sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});



bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+nitro'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 5 seconds before generating nitro again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 5000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://link-to.net/41622/code1 ) 200x Nitro Codes list 1. :two: ( https://link-to.net/41622/codes2 ) 200x Nitro Codes list 2. :three: ( https://link-to.net/41622/coded3 ) 200x Nitro Codes list 3. :four: ( https://link-to.net/41622/coddes4 ) 240x Nitro Codes list 4`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Nitro Codes** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Unchecked Nitro Codes sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});


bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+nordvpn'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://link-to.net/41622/nord ) 150x NordVPN Accounts list 1. :two: ( https://link-to.net/41622/norde2 ) 150x NordVPN Accounts list 2. :three: ( https://link-to.net/41622/norde3 ) 200x nordVPN Accounts list 3`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**NordVpn Account** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "NordVpn account sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});


bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://up-to-down.net/41622/spotify1 ) 200x Spotify Accounts list 1. :two: ( https://up-to-down.net/41622/Spotify2P ) 200x Spotify Accounts list 2. :three: ( https://up-to-down.net/41622/spotify3 ) 200x Spotify Accounts list 3. :four: ( https://up-to-down.net/41622/spotify4 ) 128x Spotify Accounts list 4`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Spotify Premium Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Spotify Premium accounts sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});

bot.on('message', message =>{
    if (!message.guild) return;
if (message.content === '+minecraft'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait 2 mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `Note: We have added Little Advertisement. You Can Get more than 50 Accounts by seeing advertisement 1 time. Watch Advertisement and Recieve Alot Accounts Thank You. :one: ( https://up-to-down.net/41622/mineas1 ) 120x Minecraft Accounts list 1. :two: ( https://up-to-down.net/41622/minesd2 ) 120x Minecraft Accounts list 2. :three: ( https://up-to-down.net/41622/minets3 ) 149x Minecraft Accounts list 3`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Minecraft NFA Accounts** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Minecraft accounts sent on **DMs**! :white_check_mark:"
   }});
    };
    
};
});
bot.login(TOKEN);
