const botSettings = require("./botsettings.json");
const Discord = require('discord.js');

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

    if(command === `${botSettings.prefix}championgg`){
    //    let embed = new Discord.RichEmbed()
    //    .setAuthor(message.author.username)
    //    .setDescription("This is the user's info!")
    //    .setColor("#00ff9b")
    //    .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
    //    .addField("ID", message.author.id)
    //    .addField("Created At", message.author.createdAt)

    //    message.channel.send(embed);
    message.channel.send("https://champion.gg/champion/" + champion + "/Middle?league=");

       return;
    }
});

// bot.registry.registerGroup('random', 'Random');
// bot.registry.registerDefaults();
// bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(botSettings.token);
