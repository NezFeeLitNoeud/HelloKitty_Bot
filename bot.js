const Discord = require("discord.js");
// var cleverbot = require("cleverbot.io");
const client = new Discord.Client();
// client.login('NDU4NTUzMTA5ODA4MDIxNTA0.DgpUZA.MAcUWePE9E71YezeYJW_jRCz-JU');
// var bot = new cleverbot('smueDGhPJmtv8R2g','yVtXm9B5gHxiwy16mSfTEaGfwbL3uJL3');
// var session = bot.setNick("HelloKitty")
var prefix = '!'

// Cleverbot opérationnel qu'a 30%.

// bot.create(function (err, session) {
//     bot.ask('Bonjou!', function (err, response) {
//         console.log(response);
//     });
// });



client.on('ready', () => {
  console.log(`Connecter à :  ${client.user.tag}!`);

  client.user.setPresence({ game: { name: 'Hello Kitty Online', type: 0 } });
});

client.on('message', msg => {


if (msg.channel.type === "dm") {
    clbot.write(msg.content, (response) => {
      msg.channel.startTyping();
      setTimeout(() => {
        msg.channel.send(response.output).catch(console.error);
        msg.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }

	var auteur = msg.author;



	if (msg.content === 'Chaton') {
  	// Repond en mentionnant l'user
    msg.reply('I <3 Cats !!!');
  	}

  	if (msg.content === prefix + 'avatar') {
    // Envoie l'URL de l'auteur
    msg.reply(auteur.avatarURL);
  	}


});

 client.on('guildMemberAdd', function(member) {

// Faite attention à changer l'id du serveur par les votres !
  if(member.guild.channels.exists("id", "457954899393511435")){
    console.log(`Le channel existe`);
    member.guild.channels.find("id", "457954899393511435").send( member.displayName + 'est dans la place. Cachez vos copines !')
  } else {
  	console.log("Ce serveur n'existe pas !");
  }
});

 client.on("ready", () => {
    client.guilds.forEach((guild) => {
         let defaultChannel = "";
         guild.channels.forEach((channel) => {
               if(channel.type == "text" && defaultChannel == "") {
               if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                   defaultChannel = channel;
               }
               }
         })
         setInterval (function () {
              defaultChannel.send("@everyone Trop mignon !!!") 
         }, 1 * 120000);
   })
})


 





client.login('NDU4NTUzMTA5ODA4MDIxNTA0.DgpUZA.MAcUWePE9E71YezeYJW_jRCz-JU');