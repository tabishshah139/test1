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
   bot.user.setActivity(`${bot.guilds.size} servers | !help | Invite  `);
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
    var string = `8helliom@gmail.com:Shadow99
`;
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
    var string = `Daniel.lowe@gmail.com:xajookaz
`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Crunchyroll Account** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Crunchyroll account sent on **DMs**! :white_check_mark:"
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
    var string = `laurenp.thomas@yahoo.com:Charliecat9510
`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Mail Access Account** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Mail Access account sent on **DMs**! :white_check_mark:"
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
    var string = `
`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Nitro Code** \n \n ${random}`
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
    var string = `Note: We have added Little Advertisement
You Can Get more get more than 50 Accounts by seeing advertisement 1 time 
Watch Advertisement and Recieve Alot Accounts Thank You
:one: ( https://link-to.net/41622/nord ) 150x NordVPN Accounts 
:two: ( https://link-to.net/41622/norde2 ) 150x NordVPN Accounts
:three: ( https://link-to.net/41622/norde3 ) 200x nordVPN Accounts
`;
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
    var string = `Note: We have added Little Advertisement
You Can Get more get more than 50 Accounts by seeing advertisement 1 time 
Watch Advertisement and Recieve Alot Accounts Thank You
:one: ( https://up-to-down.net/41622/spotify1 ) 200x Spotify Accounts 
:two: ( https://up-to-down.net/41622/Spotify2P ) 200x Spotify Accounts
:three: ( https://up-to-down.net/41622/spotify3 ) 200x Spotify Accounts
:four: ( https://up-to-down.net/41622/spotify4 ) 128x Spotify Accounts


`;
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
    var string = `Note: We have added Little Advertisement
You Can Get more get more than 50 Accounts by seeing advertisement 1 time 
Watch Advertisement and Recieve Alot Accounts Thank You
:one: ( https://up-to-down.net/41622/mineas1 ) 120x Minecraft Accounts 
:two: ( https://up-to-down.net/41622/minesd2 ) 120x Minecraft Accounts
:three: ( https://up-to-down.net/41622/minets3 ) 149x Minecraft Accounts`;
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
