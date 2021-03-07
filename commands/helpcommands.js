module.exports = {
    name: 'helpcommands',
    description: "Help command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`__**Admin Command**__`)
        .setDescription("Beta 1.0")
        .addFields(
            
            {name: '**-contact**', value: "⚙️ send ways to contact us"},
            {name: '**-serverinfo**', value: "⚙️ infos about the Server"},
            {name: '**-userinfo**', value: "⚙️ infos about you"},
            {name: '**-avatar**', value: "⚙️ see avatars"},
            
        )
        .setFooter("MainBot | Version 1.0")
        message.channel.send(newEmbed)
    }
}