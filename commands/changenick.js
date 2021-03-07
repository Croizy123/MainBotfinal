const Discord = require('discord.js')
module.exports = {
    name: 'changenick',
    description: 'changes nickname',
    async execute(message, args, Discord) {
        if(!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
            return message.channel.send({embed: {color: "RED", description:"You don't have the permission to use this command!"}})
        }

        let user = message.mentions.users.first();
        if(!user) return message.channel.send({embed: {color:"RED", description:"You need to mention the user!"}})

        let nick = args.slice(1).join(" ");
        if(!nick) return message.channel.send({embed: {color:"RED", description:"You need to input the nickname!"}})

        let member = message.guild.members.cache.get(user.id);

        await member.setNickname(nick);
        return message.channel.send({embed: {color: "GREEN", description:`Successfully changed **${user.tag}** nickname to **${nick}**`}})
        
    }
}