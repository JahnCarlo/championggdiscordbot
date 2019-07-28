const botSettings = require("./botsettings.json");
const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot1 = new commando.Client();

bot1.registry.registerGroup('random', 'Random');
bot1.registry.registerDefaults();
bot1.registry.registerCommandsIn(__dirname + "/commands");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`Bot is ready ! ${bot.user.username}`);
    try{
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e){
    console.log(e.stack);
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let champion = messageArray[1];
    let args = messageArray.slice(1);

    if(!command.startsWith(botSettings.prefix)) return;

    if(command === `${botSettings.prefix}cgg`){
    message.channel.send("https://champion.gg/champion/" + champion + "/Middle?league=");
       return;
    }
    if(command === `${botSettings.prefix}ph`){
        message.channel.send("https://www.pornhub.com/categories/" + champion);
           return;
        }
});



bot.login(botSettings.token);


//    let embed = new Discord.RichEmbed()
    //    .setAuthor(message.author.username)
    //    .setDescription("This is the user's info!")
    //    .setColor("#00ff9b")
    //    .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
    //    .addField("ID", message.author.id)
    //    .addField("Created At", message.author.createdAt)
    //    message.channel.send(embed);