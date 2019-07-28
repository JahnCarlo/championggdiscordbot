const commando = require('discord.js-commando');

class championgg extends commando.Command {

    constructor(client){
        super(client, {
            name: 'cgg',
            group: 'hyperlinks',
            memberName: 'cgg',
            description: 'Generates hyperlink for champion given as input.' 
        });
    }
    async run(message, args){
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let champion = messageArray[1];
        let args1 = messageArray.slice(1);
        message.channel.send("https://champion.gg/champion/" + champion);
        return;
    }
}

module.exports = championgg;