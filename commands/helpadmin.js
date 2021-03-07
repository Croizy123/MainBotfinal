module.exports = {
    name: 'helpadmin',
    description: "Help admin",
    execute(message, args, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`__**Admin Help**__`)
        .setDescription("Beta 1.0")
        .addFields(
            
            {name: '**-ban**', value: "⚙️ Ban members"},
            {name: '**-kick**', value: "⚙️ kick members"},
            //{name: '**-mute**', value: "⚙️ mute members \n**Usage:** -mute <@user> <time>"},
            //{name: '**-unmute**', value: "⚙️ unmute members"},
            {name: '**-changeNick**', value: "⚙️ change nicknames \n**Usage:** -changeNick <@user> <nickname>"},
            {name: '**-lock**', value: "⚙️ lock a channel \n**Usage:** -lock <#channel>"},
            {name: '**-unlock**', value: "⚙️ unlock a channel \n**Usage:** -unlock <#channel>"},
            {name: '**-knast**', value: "⚙️ put a member into the jail \n**Usage:** -knast <@user> <time>"},
            {name: '**-free**', value: "⚙️  send a user out of the jail \n**Usage:** -free <@user>"},
        )
        .setFooter("MainBot | Version 1.0")
        message.channel.send(newEmbed)
    }
    else {
        message.reply("You don't have to permission to use this command!")
    }
}
}