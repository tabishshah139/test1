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
                name: "**Hulu**",
                value: "Stock:600   || !hulu"
              },
              {
                name: "**Spotify**",
                value: "Stock:665  ||  !spotify"
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
if (message.content === '+spotify'){
    if (usedCommandRecently4.has(message.author.id)){
        message.channel.send('``Wait mintue before generating again``')
    } else{
        usedCommandRecently4.add(message.author.id);
        setTimeout(() =>{
            usedCommandRecently4.delete(message.author.id);
        }, 120000)
    var string = `laurenp.thomas@yahoo.com:Charliecat9510
dhoffman1012@gmail.com:Oct1212h
stevenhaywood@iinet.net.au:Honeypud1
nlseb7@yahoo.com:Happisburgh123
Beckeramberg@hotmail.de:Bitchpls1
mcmichung@gmail.com:806620mc
sabrina_xox9@hotmail.com:pokemon6
jhvegam@gmail.com:numero10
ricardo.urrunaga26@outlook.com:Nirvana27
preeya.jueng@gmail.com:joomy13024
lauragal88@hotmail.com:Doolough1
millan774@gmail.com:honingi1
samb1322@gmail.com:Deadisland1
minglehearn@rtcol.com:Mongoose1
yan_crf@hotmail.com:Brettas101594
dena572@yahoo.com:beans1234
pablopolka11@gmail.com:pablopolka0302
penelopepeluso@hotmail.com:penelope1981
pebarsu@gmail.com:p9121980
tom@patriotcarpenter.com:wiggles123
sandra_torresc@yahoo.com:sandylulu2012
scotthooper@live.com.au:clgfcsc1
carmencors2@gmail.com:Ictmmoy2
aimfaast@gmail.com:Ihatemen1
Suley20@yahoo.com:Hugopandas12
jeca2005_uruguay@hotmail.com:Gordo0910
gprescia@gmail.com:Luckie21
tasnova.c@gmail.com:Ginger03
matias.usinger@gmail.com:Pamela13
daniel_orellanag@yahoo.es:Oficina1
angntrav06@gmail.com:Allison20
katy.vazquez89@hotmail.com:atlasdeporvida51
jenna.m.bradbury@googlemail.com:Halliwell1
mgfernandezt@gmail.com:ljm37516
moyam71@yahoo.com:Cincinnatus1
exee.lxu@gmail.com:colopeola1
cwoods851@gmail.com:streetroad1
amy.willson@hotmail.com:Willy6607
courtmichelle0413@yahoo.com:cowgirl07
j_madigan@live.com:Friedrice1
Vicky.stewart4@gmail.com:Twins222
luis_antunez23@hotmail.com:catarino23
kimryan712@gmail.com:Marketing541
julia@lilyfieldpictures.com:Melrose23
annabel.jairaj@ymail.com:Lillyhamster10
tim@escutcheon.co.uk:white222
ruben.alfaro@hotmail.cl:Alfaro1992
jessisal12@gmail.com:Jessipam12
christian.danielczik@web.de:Krille1979
bc.white@ulster.ac.uk:White1969
dheren@comcast.net:Seminole17
mesa.mariabelen@hotmail.com:Ferybel2
cbartucci07@yahoo.com:potucc82
vsfe8@hotmail.com:Vanesita88
alan.jaircperez@gmail.com:123asdfg
heatherkomula@yahoo.com:Love4all
billiebabe66@hotmail.com:Antman03
cobraksophapmysay@yahoo.com:marina10
lisahalemail@gmail.com:Pedigree1
gera94_16208@hotmail.com:gerar135
srwilson96@gmail.com:1165364pie
jua2133129@gmail.com:jmarqu1290
chrissiesargent@hotmail.com:Hilton44!
zachary.t.crane@gmail.com:foodjunkie44
jayceegalloway@gmail.com:Jgqtpie123
Sophie-jade18@hotmail.co.uk:Oliver30
cartas_77@hotmail.com:duelistas1
ruairi.geoghegan@gmail.com:Munster7
liusanchezwillian@gmail.com:Hola2008
alexandra.turgeon@hotmail.com:poodle13
sfcc.nicole.valley@gmail.com:dumbbitch2
alexaewing24@gmail.com:Tanner24
eribone@gmail.com:campana1
jmpaules94@cox.net:mialuv1994
jackdaddy84@hotmail.com:popcorn123
fernandomartin14394@gmail.com:ferni1994
regine-m@hotmail.com:Regine2204
zuarak@hotmail.com:y6zg8t3y
isaac.ov@gmail.com:thewatchtower1
vlg1200@gmail.com:Guwame1201
belencyta01@gmail.com:Matheo11
barthajulia@gmail.com:Viola22100
ariannams08@gmail.com:rotc0402
marcelito37@hotmail.com:pelusa123
rudygamez@hotmail.com:superman1
damballa0@gmail.com:deftones1
samanthapilli@yahoo.com:shadow55
priya_n_75@yahoo.co.uk:jasmyn123
wagner.jenna3@gmail.com:Colorado1
bjoy409@gmail.com:michaeleinziger98
lordfercho@gmail.com:fiecgtd1983
rafav22@gmail.com:Snake2280
amyj1830@gmail.com:Riley133
josepascal1998@gmail.com:Diciembre98
moniquewperez@gmail.com:Iannoble12
ivanpagnoni@hotmail.com:Ivanchul17
aggarrido@hotmail.es:Vale4647
kingdavidvsgaming@gmail.com:ACEfighter123
teresaclarke@rogers.com:Beevor10
clc0613@gmail.com:alyssa00
jclark@calkinstech.com:7325seal
dayra.luque@gmail.com:Cerouno800
alaynah.luttrull@gmail.com:Luttrull102
p_luna@yahoo.com:passwrd1
collins.mom@hotmail.com:Collin07
pacosc@hotmail.com:And1panda
dedricgard@gmail.com:chipjuly4
hevb@live.co.uk:Jemben10
Beckyburty@yahoo.co.uk:Amberb04
kbrowse@googlemail.com:miranda1
margot.washington@gmail.com:Poona363
blonde.mm@gmail.com:Waitakere1
garryscrim@hotmail.co.uk:gazscrim1
ashleyayu@gmail.com:Bronze28
kingfragle1@hotmail.com:Beenieman1
blowen.2000@gmail.com:snake16907
niccam_86@hotmail.com:Scottaustin86
koldemoll@gmail.com:Lego1998
nicholsonfox@gmail.com:Ginger77
dfenixn@hotmail.com:yoyo1977
ckb0912@yahoo.com:nascar88
faithfair18@gmail.com:bubbles18
tmvolini@gmail.com:Volini1019
emsy47@gmail.com:Katherine2611
mahogany.l.williams@gmail.com:Ch33ring
rtestacct@gmail.com:Openbbs1
amielou22@hotmail.co.uk:Fred1990
jacobeliks@icloud.com:purple8purple
claudiaccg@hotmail.com:ill7conx
staceio@gmail.com:staceio123
johnlock333@hotmail.com:R3dpho3nix11
virivelazquez816@yahoo.com:Av162109
luciaebert33@gmail.com:Luciaebert17
alicerigby5@gmail.com:Pineapple3
paulachallenger73@gmail.com:Sprout73!
thekman06@gmail.com:Memorial7070
mars.789@hotmail.com:magicmusic1
adelleloughlin@yahoo.com:Adelle123
bekah.jensen@yahoo.com:Bekytonz0
anja.schaefer@hotmail.de:Koko220406
lani849@yahoo.com:Stephen8
amyjackf@gmail.com:Tigger0226
busbybird@googlemail.com:Polaris1
lauren.petros@gmail.com:Doujon08
crstnsalazar4@gmail.com:cristian01
carla_robbinslees@hotmail.co.uk:Ilovemowgli1
courtneytimblin@hotmail.co.uk:Harvey54
lucas.giuri@gmail.com:cpktnwt1
fernandezrevol@gmail.com:delcampillo763
mvejaraudio@hotmail.com:Francisca123
www.blanco22@hotmail.com:wladi100
haylock.ja@gmail.com:Sherrin1
delaneyj2014@gmail.com:djmbball24
karo_makeup@hotmail.com:thiago08
tmpdor@aol.com:Elizabeth2
sebastianpuschel21@gmail.com:05081992.spm
nico_montesanto@hotmail.com:nico35701533
lucybutler44@gmail.com:Lwells25
marc.zeitter@web.de:Marcz1998
alvaro.carella@gmail.com:Negro7878
kellymannion1@hotmail.com:Mason000
leocampbell44@gmail.com:Barrystewart42
rodrigo.jrez94@gmail.com:zerauj94
ederr.rojas@hotmail.com:isabella1
paigersmd@aol.com:269Paige
alex.odg@gmail.com:Patastha1
degeorgealexis@gmail.com:marie007
gclark@build.com:Myloan33
bradblackburn48@yahoo.com:Ukfan41697
bel.cohen@hotmail.com:mariabelen14
sanroma38@yahoo.es:Sergi165800
esteban.siri@gmail.com:rino1982
matias221283@gmail.com:Matias221983
andrewbelanger@hotmail.com:Kapuskasing09
kandileereid@gmail.com:Jesusgurl1
joellevallee13@gmail.com:Cottoncandy13
kimvanderhoek@gmail.com:Lovely01
fga23884@yahoo.com.ar:Sebastian1
slarkin86@hotmail.com:Beenee24
marianafernandez90@gmail.com:Mariafe90
kristen.aversa22@gmail.com:Martink3!
robert.avellino1193@gmail.com:dn4jar3e
sealz@rocketmail.com:Guinness1
animargaryan01@gmail.com:kromcheek435
celinetreanor@googlemail.com:Mother02
agus.villanueva@hotmail.com:Noobs200
matteo.cadene@yahoo.fr:chabook1
txomird@gmail.com:War10ck2608
shaunaghthomson@hotmail.com:shaunagh1
pixistickers@hotmail.com:sophie22
Nicotorrestwingo89@gmail.com:Twingo89
benjaminjharmon23@gmail.com:b3nchmark
albertjoy956@yahoo.com:paper3210
adarshkesari@gmail.com:sachin91
mripper15@gmail.com:volleyball18
sweety62@btinternet.com:Mortimore1
cchowles@gmail.com:Bambi123
jelly-leggs@hotmail.com:Unzipme28
carola8201@hotmail.com:linger123
audrey_85@hotmail.com:madelyn1
abbynicole.eme@gmail.com:abbyemerson0
raeraeannehellekson@live.ca:Mushu101
tishavalentine@gmail.com:Kava0414
hdiemert95@gmail.com:tankmert22
chclosse@gmail.com:Closse3155
jorgeprado68@hotmail.com:triatlon2010
smoothcoco@msn.com:Delight0309
juliana.seabra@uol.com.br:Tenista1010
yoyisg12brasil@hotmail.com:Qampm020696
rwturner@xtra.co.nz:Storm213
andeanarenee@gmail.com:deena2610
polo_hot@hotmail.com:Crazy007
tannerharrell@gmail.com:Hthbhs11!
yunhuen@gmail.com:Lavull17
flopa80@hotmail.com:Adypa1505
hdyke@fsu.edu:hhdd1101
rhys.peters4@gmail.com:Gdrmab644
atlas.masperrones@hotmail.com:Josecarlos1
tgar522@yahoo.com:Faith1980
flaste@miuandes.cl:johnlennonme00
g6@buffalo.edu:Gaurav_007
theresa.decosty@yahoo.com:softball1015
shelbygpope@gmail.com:smile1995
chris@uniquecapture.com:Minger26
agkrisciunas@gmail.com:Titanoboa1
kendall.enns98@gmail.com:Meier4273
padagonza@gmail.com:Juacla43175
ovargas1525@hotmail.com:Kapume1525
brock_hennah@hotmail.com:Ness220290
hull170@live.co.uk:Abigail1
ba600@hotmail.com:Cpala001
maryelliecarpenter@gmail.com:basccer6
1056744835@qq.com:qwert13579
pcmarrufo@gmail.com:Jfrigar1524
danieldellera@gmail.com:46daniel
majomarenco@gmail.com:majoma22
rodrigo.heise@gmail.com:Julianhr1302
Midia_753@hotmail.com:M1i2d3i4a5!
pinafuchs36@gmail.com:bloedekuh1
adellefindlay@gmail.com:adelle12
ajohari70@gmail.com:F4saken7
alinaschaub@aol.com:Highwaist5
blake.keats@hotmail.com:Handsoff1
Rebekah.c.manning@gmail.com:Slider89
bengisupasa@gmail.com:sucuk180
gusyjavier@gmail.com:Crobat18
tcmartin6@gmail.com:nwna1991
kuhnjessica5@gmail.com:Tazerlilly1
tjec@live.com:M90james
jimink98@gmail.com:jmk203401
kesh8622@gmail.com:Kesh8622
gpalacios@simnet.com.ar:gallina70
jtc906@aol.com:Apple906
dionleger@gmail.com:Isajoel2
stephmckie@gmail.com:Sharks.3
msanikommu@gmail.com:grun7peace
kendra.heidman@gmail.com:Holliday.2013
magallon_venado_94@hotmail.com:Pera1223
carolyngoldhill@gmail.com:Lorraine1
giuseppe.marotta@yahoo.it:Cazzo1969
teagan.macknight@gmail.com:Kona22694!
grovebethany15@gmail.com:pooter98
huwcampbell@yahoo.co.uk:Scarlets123
arqricardovalle@gmail.com:Elpeludo05
nicolas_villordo@hotmail.es:F1f2f3f4
timgru91@yahoo.com:Troop241
thelobott@gmail.com:Monty723
tinam3277@gmail.com:Christina1
schlegels@aol.com:October7th
talvarez490@gmail.com:Southpole4
caliagac@gmail.com:Aliaga2327
brettayling@hotmail.co.uk:pizzahut123
raffailfajarfitra@gmail.com:indonesia123
holliemeller@gmail.com:Neroguilt1
entheos321@gmail.com:Phinupy1
andrewcol2@hotmail.it:LOzoodi105
birodavid1999@gmail.com:Birodavid13
aishling-o-d@hotmail.com:Majella92
alondraarriaga2000@icloud.com:arriaga2001
kylemarcinkowski@yahoo.com:Nikesnow1
sergio_andres_castano@hotmail.com:Manuelita626
oscar_javier_castanon@yahoo.com.ar:Emmatamo2
Annie.tammearu@gmail.com:soko0710
allenalyssa@hotmail.com:Unamaga23
leah.hannon@hotmail.co.nz:Chocolate11
tonyamaxstadt@yahoo.com:devanlauren1
natalieclaireroberts@hotmail.co.uk:Claire171089
ccstjohn27@gmail.com:Osubucks27
clairensimon@tiscali.co.uk:Bantyuk1
selectmay7@yahoo.com:Figment28
jcktik@gmail.com:221925jck
alexandraklein15@gmail.com:blossom14
mikerekrut_69@hotmail.com:Imcrazy1
carolineherron82@aol.com:Sophie10!
bkdepriest@gmail.com:Bk913dep
daan.fa@hotmail.com:Miniruub1
melissalam767@gmail.com:Lam00229
jho528@hotmail.com:JHO2347384
noejoya@hotmail.com:noenoe123
davidpacheco2@hotmail.com:pachekito1
chastain_christian@hotmail.com:cy2db5802
jose.montoyao@hotmail.com:millos107
abi.lutz@hotmail.com:Abi10281999
amandawatt8@hotmail.com:Princess8
cprefontaine9@gmail.com:October4155!
spotliteonu@gmail.com:Lyricliam2
slholt02@gmail.com:sumbug2002
alana-arnold@live.com.au:clarissa1
karmenta5@hotmail.com:Ellie4881
rebeccajobrien1@gmail.com:Maisyfluf1
paco_ca15@hotmail.com:Luzmaria05
danielanilo27@gmail.com:dragons32
e_sanchez_s@hotmail.com:scamper1
marianavitalv@gmail.com:Mv1t4l88
dmellimaci@gmail.com:fede2709
rebecacordova27@hotmail.com:Ub40ub40
jtcallahan00@gmail.com:Wrestler1
oliviayounce96@gmail.com:salt119fern297
tinani18@aol.com:Biochic18
kharisma240196@gmail.com:hanyaima03
raupe81@hotmail.com:Herbst3004
bigsterrules@hotmail.com:Argejete1
anthonyminucci@ymail.com:Zuccaru76
algoodwin01@gmail.com:Prettygirl32598
stoogzbp_69@yahoo.com:Babyd88!
nkavouris14@gmail.com:bball1428
nayelivallejo@gmail.com:Jelly101
cougarlopez@gmail.com:Javibel03
katherine.jane.hooper@gmail.com:pi3.14159
restrepomar3@gmail.com:marley333
peytongodwin922@gmail.com:pcg92299
andrewbarnes85@gmail.com:c5o1o5l1985
jaylouisa@me.com:Louisa13
jacuevas@industria.ccoo.es:3deFebrero.
ebanson95@hotmail.com:Thirteen13
daniel.catricheo@gmail.com:k3xeo2609
rebar.cc@gmail.com:Grover00
mattholz78@gmail.com:Holzheimer78
lindsaybigg@hotmail.com:Lrb1594
waw06001@gmail.com:Hepburn1
puppydog7712@gmail.com:redkeds7
hailey_kalina@yahoo.com:purplecow5
nicolas.garcia98@live.com:uanchutri123
kyorko97@gmail.com:katiebiz2
kellyoreilly18@yahoo.com:Jacktad123
Rachael.middleton704@hotmail.com:kennyboi8
leonardbackflip@gmail.com:sportage1
ejc1900@gmail.com:Capsule1
wwuitan81@gmail.com:buntewelt2002
cuchals@gmail.com:futrono1
tocomoralesg@gmail.com:casa2890.
siobhanreid96@hotmail.co.uk:connorbear2010
mariano2k@hotmail.com:Syncmaster1980
gdooley3@gmail.com:Ptrk6450
placencia.ricardo@gmail.com:rspmielu123
ayeshakt92@live.com:Skankydog2348
pedrovlsr@hotmail.com:Kingdom1990
deborahgalimore@yahoo.com:destiny1
floraguirre@live.com:catuchis36
gus.savvas@gmail.com:Marlboro1
holliegran01@gmail.com:Boothferry99
car.bl13@hotmail.com:Carlos13
carlablack@ymail.com:Mouthbig15
manuguerol@gmail.com:manu1987
bubbazook@hotmail.co.uk:Furgus01
jenny.weissheim@icloud.com:jweissheim98
ferras@zalt.co:Maymoon1
ghadban.moses@gmail.com:Mosesg2603
jopppalomo@hotmail.com:Rolando2271
andrew.herr4@gmail.com:phone6397478
luis_15alvarado@hotmail.com:Moreno18
heneghanruth@aol.com:Edgerton
matt.fergy@yahoo.com:longhorns20
alliecarter78@gmail.com:volleyball5
gonzalo_colidio@hotmail.com:Gonza2314
a.souto91@gmail.com:Entersandman1
tom@neweconomy.org:Redsox04
rusodelapampa@gmail.com:ruso197714
feibro1@hotmail.com:Nollie01
agustinasmate@gmail.com:Peluffi4
louisde4@gmail.com:Iammclovin1
martinmx76@gmail.com:Solstice890113
devon.boon@gmail.com:Phillies04
logan.joel05@gmail.com:flj418500
georges.fanny2809@hotmail.com:Poupousse2004
lisa.vangorder23@gmail.com:Campino23
kaitleymcneil17@gmail.com:mothership17
xsam21x@hotmail.co.uk:Georgie1
gjrebecchi@gmail.com:Rebecchi1
adamcarrier@outlook.com:sjss6863
martinez.rachell05@gmail.com:gatitos0524
wayne_a_bishop@msn.com:hello563
pyxiesdust@gmail.com:Oliver04
daszgunna@gmail.com:daszgunna1
adrodrig@gmail.com:Xluzx792
meg@megdummer.com:hannigan1
lf.villavicencio@gmail.com:Luisfervb86
wandaraebeck@gmail.com:Kebh110987
mariaisabelmedina@gmail.com:Mmedina19
chiaragcm@gmail.com:Kia18piu!
nicolas.lei@gmail.com:Coni4020
gasparichea@gmail.com:assilem85
carlos_riosb@live.com.mx:Rios1975
kjdpost@hotmail.co.uk:jasmine7025
steph_hinson@hotmail.com:Monty100
melancolidos@hotmail.com:Duendeg09
thefussydutchman@gmail.com:D0gnsuds
rociogassa@hotmail.com:colli123
somfotro678@gmail.com:guineapig89
hilary.merline@gmail.com:penelope8
boregan21@gmail.com:Catalan21
sarah.k.paquette@gmail.com:Horsie1!
jennifer.toutant@gmail.com:Lovejenny01
brianne.vana@yahoo.com:bmv42194
melagih@hotmail.com:Tolonglahya1
lari6kids@icloud.com:Lari6kids
sams_chad@yahoo.com:flashned1
jeanpaulpr@gmail.com:patino05
abrecht14@wildblue.net:jackie14
rauter.toledo@gmx.de:Lolito37
lestfal@hotmail.com:Luismp34
pedromena3@gmail.com:62154pmm
kevinmisaelmarconi@gmail.com:asdasd123
emmadrybread@yahoo.com:pigtails2
gina.coluccio@yahoo.com:hazzabear1994
dayna.thompson820@gmail.com:4719Eliza
schestman@yahoo.com:Sam1jack
ahernandezbarrios@gmail.com:Tonypacheco8
angelialws1@gmail.com:Orange18
nmherman@gmail.com:Herman34
jescamjen@gmail.com:camitrev2
lyndah40@yahoo.co.uk:Alfie123
ewebb@gustavus.edu:ekc100507
b.emalfarb@gmail.com:toolsurf1
perri.lannon@hotmail.com:Eyeballpel1
lexiiearbeau@hotmail.com:539449aL
anillina78@hotmail.com:N177c288
kirstinlara@gmail.com:Leirutangi33
delabarra.m@gmail.com:zapallo1
chloeboat@yahoo.com:Pavement1
michelle.orange@btinternet.com:Chelsea1
courtney_yhap@yahoo.com:Courtney0205
savier911@hotmail.com:rojoamanecer1
tommy12345donaldson@gmail.com:tommyd19
jkandp@gmail.com:Patrick1
karendavies421@rocketmail.com:Ad201101
ssjadeguardian@gmail.com:Yssw0090189
eric200cv@gmail.com:Sldz1200
chris19911@hotmail.com:Safira19911
katelynngurr@gmail.com:rex45ill
zcarper12@gmail.com:Guitar12
wyatt.golay@gmail.com:Airsoft1
taylorsmith254@yahoo.com:alohomora1
manuelgp10@gmail.com:Paloma67
novinnovin191@gmail.com:Fanmagazine123
jucepalo@aol.com:Ciriaca65
raudry@live.com:CGRUgeminis24
mkominski@cox.net:monkey28
agoncar16@gmail.com:Playground8
tats1000@gmail.com:Tatytaty1
sarabin01@gmail.com:Noisiamoinfinito11
emmajane113@gmail.com:maddie113
hollyrlambert@icloud.com:Hollylambert03
leahd@live.co.uk:Leah1990
fejportero@hotmail.com:Chevrolet1
nuutti.immonen@gmail.com:Rikunpoika1
h_raudhah@yahoo.com:Azkara65
suziqzee@aol.com:Kingdom5!
stephayline@aol.com:Nick9898
amyfarmer58@gmail.com:cakefear1
gaby_ina@hotmail.com:Kg21pagn
mjp@initium.gr:Mikep1113
alanpholmes@gmail.com:Claypole67
rlogo995@gmail.com:logoxperiaz.1
jaimep05@live.com:Alex0411
romowalkup@hotmail.com:Jerrytherion1
lil_shooting_star22@hotmail.com:Batman123
moayres@comcast.net:A1234567
godsgal94@gmail.com:princess94
danny-skelter.92@hotmail.com:fernandito9
jessica_scarr@hotmail.com:jscarr123
anthony.smigielski@gmail.com:Vandoren1
nikky22mannering@hotmail.com:Chocolate22
gmontanos89@gmail.com:Gerardo89
leah.carson27@gmail.com:leah2709
amymartinez14@aol.com:Mariaibarra38
jbjennabass7@gmail.com:Luv2swim!
leventistek1@hotmail.com:pzq9mkysq21
axpch2020@gmail.com:alumni2020
xchristin@hotmail.com:flowerdj1
infsaulmachado@gmail.com:Al5coy84
sophie.4@live.com.au:Dob280986
kiffy.clelland@aol.co.uk:Pineapple1
0giveuptheghost0@gmail.com:Darkstalker1
jboixco@gmail.com:589140JBc
vdvmek@gmail.com:aniakinia99
kmsoriano93@gmail.com:Blackbelt93
megrobinhold@gmail.com:Mrobinhold1
edudsa2@gmail.com:eddy140295
ashleigh_caitlin@hotmail.co.uk:Lionmonkey1
moscamosca5@gmail.com:Sebastian5
melaneer123@gmail.com:eenalem1
JPro15@Hotmail.com:Helius
agustinaperezgomar@hotmail.com:agus1128
patriarcamartin@gmail.com:Lean2608
hollystephens895@yahoo.co.uk:Freyarosie123
rachel_m_08@hotmail.com:totpram1
bertaredii@gmail.com:bertukas1
rnubuor01@gmail.com:cherry223
cassi.piskol@gmail.com:Steinbock2003
enquiries@moonrakerdisco.co.uk:Belinda1
clareosunjimi@msn.com:Davina0402
vit.vitoria.1999@hotmail.com:Vdss1999
anjelica.monreal@gmail.com:Offthewall11
jennaammons18@gmail.com:J12e4n00
hbgilbert00@gmail.com:Yonnab21
branishaw@gmail.com:bwalks0806
riquete@hotmail.com:Randrade7
kandydat1@vp.pl:qwerty1
daniv07@hotmail.com:salame13
lil16298@hotmail.com:tortoise2
bensawers@gmail.com:Molly001
julesh1988@hotmail.com:dasher88
esotofierro@gmail.com:edito1927
gushigamer@outlook.es:soygushi99
portnoyallison@gmail.com:vp1720lp
bronagh83@gmail.com:Bronagh25152
tiffany.landis@yahoo.com:edgardo1
amv.2204@gmail.com:Sborkav1
shayley_88@hotmail.com:Brodie99
kellyrubi021@gmail.com:Kellygirl21
panchialta@gmail.com:nightcorexdd1
guenspiller@yahoo.com:beloved1
ddegoler@gmail.com:Kansas2009
pacotangm@gmail.com:SaR3M13TL
myiiaryz@hotmail.com:Yari1136
r2d2g2@roadrunner.com:Radar123
klinga.simon@gmail.com:Klingeling95
tabulabanda@hotmail.com:Lvgp1651
cegmach1992@hotmail.com:Albaluz1990
sue@bryonyhill.co.uk:Truffle1959
sean@sjp-services.com:Sjj260782
rjfamy@gmail.com:Olly140216
perper22@yahoo.com:Lalala101081
snowden385@hotmail.com:dellamae09
janayawhitton20@icloud.com:Janaya6178
seynabougaye22@gmail.com:Seynabou22
mariiatriyo@gmail.com:sasaguapa5
tblowery2@gmail.com:Blakelowery1
oliviapavlak1@gmail.com:Pavlak0682
simard004@gmail.com:Sdhillon02
rjlozada10@gmail.com:Google10
carlosorozco87@hotmail.com:Ceoc1130
halldorah1@gmail.com:a2612s2902
anname_29@live.com:Tillian1
mrsclairemiller@gmail.com:Aimeem15
sweet.sybil@hotmail.com:Xed93zav
erbotella69@hotmail.com:D74917105x84
lucy_taylor88@hotmail.com:mexfield80
rsanchezt03@hotmail.com:SATURNO1934
panoppen@comcast.net:Nicole22
josue_barto97_@hotmail.com:Pollolol1
GiovannaRea@gmail.com:Alessi12
partidacontreras1@yahoo.com:Parcon1318
diianni2@aol.com:Teacherh1
kirsten.macinnes@yahoo.com:Bearjess4
jscr_02@msn.com:Brady1234
oskar_cheberrones@hotmail.com:Continuar123
gman2439@yahoo.com:M0rrison
elle.skull@gmail.com:A2x9e3l5
nickd111@hotmail.co.uk:Coventry1
ac.reimers@gmail.com:lucie123
franmuchinik@gmail.com:jalanoc1
nitamccel@gmail.com:liverpool123
joetropea@gmail.com:bunghole1969
tbianchini@alggin.com:M1cha3la
oscarumc@gmail.com:110285WTF
cgaytan92@gmail.com:July1380
reneemacd01@gmail.com:Moondog1016!
tloup@morrisbart.com:Popcorn7
kanoalvarez@hotmail.com:K1a2n3o4
penelopita_89@hotmail.com:Focoazul1
karanvmago@gmail.com:R739bz7j
soul_cab@hotmail.com:Ranita19
iain_webster@hotmail.com:Lintrathen08
caibalo@gmail.com:schwartz1
sturch95@yahoo.com:Kjs441995
karinrgolden@gmail.com:rachael5
elcesar20@hotmail.com:JULI0803
Pitt2215@yahoo.com:Pitt1522
pauly.carrillo.v@gmail.com:Enfermera1
laurenirving2000@gmail.com:Heather01
mty.ahernandez@gmail.com:hernandez01
lucie.coiffic@hotmail.fr:Ambrekevin9
dgkerr@live.co.uk:Rangers1
amandapitre13@gmail.com:Crumping13
philliptrost@gmail.com:superman22
joaco_2912@hotmail.com:puigde10
bobbysepetis@gmail.com:Jello120
saul.maldonado@upr.edu:sma12345
antuan.ballesteros@gmail.com:Azshara9846
aayesha.jan@gmail.com:daedisti1
leann.m.martin@gmail.com:Ktm102604
kritzib@yahoo.com:Pixiedust15
uberyman@icloud.com:Milla123
thakker@hotmail.es:Prostreet1
stefan_bonvillian@yahoo.com:michigan1
alberto.kalel@gmail.com:Zidane21
diegonita997@gmail.com:Ilovepures1
LaurenScrafton11@yahoo.co.uk:Snowster714
chiska_86@hotmail.com:Iris123456
amanda.lugo1996@gmail.com:heartogram96
linnet.ohanlon@gmail.com:allison1jordan2
fabriciocfc@hotmail.com:fabritop84
luismanuel.sales@gmail.com:Tiger1050
maddie13wright@gmail.com:Reccos13
noemielapensee@gmail.com:Soccerferg28
Griolikapo@gmail.com:Thomas1812
janire1989@gmail.com:hanayoridango1
StruckPedersen@gmail.com:Sanne02
blonce@seznam.cz:Blonce1977
alysajuarez@gmail.com:Ajayjay27
carrin.davies@hotmail.com:Tobypeppa1
clairechampeau16@gmail.com:1608Claire
amyhedges97@outlook.com:tdhajh123
alex.brooke100@gmail.com:S90ck3104
paulinakulach14@gmail.com:fob26135
lunafierroanakaren@gmail.com:incorrect120490
mlarraij@uc.cl:Maca0706
margot.herail@hotmail.fr:Diana34570mh
nikolasgaribay1@gmail.com:cheyenne-7
malidoux@gmail.com:Vidrine1
daia.93.10.04@gmail.com:ladaia123
yvan.calvo.lupo@hotmail.com:yvan1990
savannahhatfield5@gmail.com:Banana3033
naw_nano@hotmail.com:Elotro01
z4zanetta@hotmail.com:iloveme31999
cdc22@live.unc.edu:seven8nine
mcgaffneyr@gmail.com:diadems1
fernandoyleon@hotmail.com:Gatafea9
hsuehken83117@gmail.com:ken124639116
juanfrancomes@hotmail.com:dindi1978
cmuck04@gmail.com:Brutis21
teranljm@aol.com:Jessica1
harvinrugama@gmail.com:managua95
duvant99@gmail.com:140999duvant
l_mannion@yahoo.co.uk:Monkey000
rmarivi@hotmail.com:Nuevayork1
todd.cappezza@gmail.com:flyers76
evakonczak@hotmail.co.uk:Freashness1
jmlopezg@gmail.com:truchero1
rachael.dagnall@googlemail.com:Manchmal189
jemima_gp@hotmail.com:54132328amimey
tkovacevich34@gmail.com:Djedo34!
peggy_mp@yahoo.com:lu29pe04
ananderson99@gmail.com:Panda001
kauagr1@gmail.com:minshu100
mat.e.aguero@gmail.com:Matias1986
pipecar80@gmail.com:Dios12494
lizziekrelle@live.co.uk:Chutney123
etwasmotzig@hotmail.de:1312etwasmotzig
poerros@gmail.com:eldercano1
englecassie2@gmail.com:blackbird2008
brooklyndenae@gmail.com:L!pgl055
Shields.sims@gmail.com:Simsjs1991
tthieme@comcast.net:Ryleet12
harperdeagan@hotmail.com:Rhianni1
leo0586@hotmail.com:Leo31822777
ignacio.aragone@gmail.com:ia210370
xzaviorrromero@gmail.com:Romero77
bmate@kent.edu:Noct899267
matthew.bouch@live.com:Topman123
inostrozariel21@gmail.com:vivaelrock1
haleigh.crawford03@gmail.com:1031994hmc
darren-aldred@ntlworld.com:Sunshine01
cgudmundsen24@gmail.com:goody7887
brooke.hill@live.ca:brooke-09
tan_ghetto@hotmail.com:Bleed4u2
davittmi@yahoo.com:Redbommer1
cabrogabo@hotmail.com:Gabo1982
erinmoore08@gmail.com:john1988
michelle.jatz@gmail.com:England0
mark1202@hotmail.co.uk:vectra05
erinelizabethw@hotmail.co.uk:Hugocarlos123
nick.rivera12@gmail.com:N0t2w0rry!
mariela_cardoso@hotmail.com:julian666
deb.domiciano@yahoo.com:ferrera1
delacruzi0410@gmail.com:trooper84
ashleigh_watkins@hotmail.com:Ash040021
daniel_perez091@live.com:dan43431816
jadeandrachel@hotmail.com:paigewilson1
sanja.milosevic@outlook.de:Gesichtswasser7!
dariosancheztorres@gmail.com:123pormi
marco_zuniga@live.cl:Princesa1
markspink@hotmail.co.uk:Fosters1
mahon.chris@btinternet.com:3691clarke
k-ockendon@live.com.au:Popsicles1
r.a.k.93@hotmail.co.uk:Kimbo123
stephanie03323@gmail.com:Ruki03323
marcos_pacchiele@hotmail.com:elpacche890
hunterbryan0494@gmail.com:Adidas11
nmastropiero@aol.com:moneybags2
fruit_and_nut88@hotmail.com:Zackatreyu1
annabellezeisler96@gmail.com:Ilovemyabf123
jess.acourt@hotmail.co.uk:Sausages1
mailyy.leu@gmail.com:Eureka513
chazlie60@rocketmail.com:laulau93
da.sommermann@gmail.com:Matt4567
coso_raul_98@hotmail.com:Soylaleche1
barnesbrandy22@yahoo.com:Daddy2012
daniwilliams95@gmail.com:Awesome7391
jooshpad@hotmail.es:padilla1193
brownred4@hotmail.com:Icarokage1
podury@gmail.com:shirin03
aftovar@hotmail.com:Andres06598671
Emilyg46983@yahoo.com:Dream909
roxie.ott@gmail.com:Harley3094
ally.knee@gmail.com:Geelong1er
chelseabooty@me.com:josiejane1
amilcar.93@hotmail.com:aimc1993
mjtilse@gmail.com:seven8nine98
ribayhuerta@gmail.com:Ulkiorra1
hazelbrooks@hotmail.co.uk:Quard7867
trevorhodgins92@gmail.com:Hodgins13!
tkula2003@yahoo.com:Yellow123
luismore_09@prodigy.net.mx:Zblt7074
imbault.sarah@gmail.com:assi20132014
terencefarrell7@yahoo.com:farrell7
nathitha2001@gmail.com:Lucas4135664`;
   var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
     message.author.send({embed: {
        color: 3447003,
        description: `**Spotify** \n \n ${random}`
      }});
      message.channel.send({embed: {
        color: 3066993,
        description: "Spotify Premium account sent on **DMs**! :white_check_mark:"
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
      message.author.send("**Join Tabish Gen Official CM** https://discord.gg/zGTR2Ra");
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
