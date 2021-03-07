const Discord = require('discord.js');

const {Client, Attachment} = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}



client.once('ready', () => {
	console.log(`connecting...`)
	console.log(`${client.user.tag} connected!`);
    client.user.setActivity("-help", {type: "PLAYING"})
})



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
	const command = args.shift().toLowerCase();

    if(command === 'serverinfo') {
        client.commands.get('serverinfo').execute(message, args, Discord);
    }
    else if(command === 'userinfo') {
        client.commands.get('userinfo').execute(message, args, Discord);
    }
    else if(command === 'contact') {
        client.commands.get('contact').execute(message, args, Discord);
    }
    else if(command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    }
    else if(command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    }
    else if(command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    }
    else if(command === 'poll') {
        client.commands.get('poll').execute(message, args, Discord);
    }
    //else if(command === 'mute') {
//        client.commands.get('mute').execute(message, args, Discord)
  //  }
    //else if(command === 'unmute') {
      //  client.commands.get('unmute').execute(message, args, Discord)
    //}
    else if(command === 'helpadmin') {
        client.commands.get('helpadmin').execute(message, args, Discord)
    }
    else if(command === 'helpmoderator') {
        client.commands.get('helpmoderator').execute(message, args, Discord)
    }
    else if(command === 'helpcommands') {
        client.commands.get('helpcommands').execute(message, args, Discord)
    }
    else if(command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord)
    }
    else if(command === 'changenick') {
        client.commands.get('changenick').execute(message, args, Discord)
    }
    else if(command === 'purge') {
        client.commands.get('purge').execute(message, args, Discord)
    }
    else if(command === 'knast') {
        client.commands.get('knast').execute(message, args, Discord)
    }
    else if(command === 'free') {
        client.commands.get('free').execute(message, args, Discord)
    }
    
    //Regelwerk

    //else if(command === 'regelwerk') {
    //    client.commands.get('regelwerk').execute(message, args, Discord)
    //}
    else if(command === 'giverole') {
        client.commands.get('giverole').execute(message, args, Discord)
    }
    else if(command === 'removerole') {
        client.commands.get('removerole').execute(message, args, Discord)
    }
    else if(command === 'lock') {
        client.commands.get('lock').execute(message, args, Discord)
    }
    else if(command === 'unlock') {
        client.commands.get('unlock').execute(message, args, Discord)
    }
    
})


client.login('ODE0MjIyNzU0MDQzNjU4MjUw.YDauCA.Rg4pFhE91jXyw0ubKFar-Wvf5_U');
