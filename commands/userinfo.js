module.exports = {
    name: 'userinfo',
    description: "userinfo",
    execute(message, args, Discord) {
        const { guild, channel } = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)
        const newEmbed = new Discord.MessageEmbed()
        
        .setColor('#0099ff')
        .setThumbnail(message.author.displayAvatarURL())
        .setTitle(`**${message.author.username}**`)
        .setDescription("")
        .addFields(
            {name: '**Username**', value: `${message.author.username}`, inline: true},
            {name: '**Tag**', value: `${message.author.tag}`, inline: true},
            {name: '**Created**', value: new Date(user.createdTimestamp).toLocaleDateString(), inline:true},
            {name: '**Joined**', value: new Date(member.joinedTimestamp).toLocaleDateString(), inline:true},
            
        )
        message.channel.send(newEmbed)
    }
}