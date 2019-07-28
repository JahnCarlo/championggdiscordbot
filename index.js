
//Import libraries and key
const botSettings = require("./botsettings.json");
const Discord = require('discord.js-commando');

//Starts bot's instance
const bot = new Discord.Client({disableEveryone: true});

//creates groups
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('hyperlinks', 'Hyperlinks')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

//let's you know bot is running and generates a link you can use to add bot to your server
bot.on("ready", async () => {
    console.log(`Bot is ready ! ${bot.user.username}`);
    try{
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e){
    console.log(e.stack);
    }
});

//bot log in
bot.login(botSettings.token);


//    let embed = new Discord.RichEmbed()
    //    .setAuthor(message.author.username)
    //    .setDescription("This is the user's info!")
    //    .setColor("#00ff9b")
    //    .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
    //    .addField("ID", message.author.id)
    //    .addField("Created At", message.author.createdAt)
    //    message.channel.send(embed);