const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description:'avatar',
    execute(message, args, Discord) {
        const embed = new Discord.MessageEmbed();

        if(!message.mentions.users.first()) {
            embed.setTitle("Your Avatar!");
            embed.setImage(message.author.displayAvatarURL({dynamic:true, size: 512}))
            embed.setColor("RANDOM");
            
            message.channel.send(embed);
        }
        if(message.mentions.users.first()) {
            const user = message.mentions.users.first()
            embed.setTitle(`${user.tag}'s Avatar`)
            embed.setImage(user.displayAvatarURL({dynamic:true, size: 512}))
            embed.setColor("RANDOM");

            message.channel.send(embed)
        }
    }
}