import { Command } from 'discord.js-commando';

class phhyperlink extends Command {

    constructor(client){
        super(client, {
            name: 'ph',
            group: 'hyperlinks',
            memberName: 'ph',
            description: 'Generates hyperlink for category in PornHub given as github.' 
        });
    }
    async run(message, args){
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;

        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let categoria = messageArray[1];
        let args1 = messageArray.slice(1);
        message.channel.send("https://www.pornhub.com/category/" + categoria);
        return;
    }
}

export default phhyperlink;