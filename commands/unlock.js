const Discord = require('discord.js')
module.exports = {
    name: 'unlock',
    description: "this command unlocks",
    async execute(message, args) {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send({embed: {color: "RED", description:`${message.author}, you can't use this command!`}})
        if(!args[0]) return message.channel.send({embed: {color: "RED", description:`${message.author}, please mention a channel!**`}})
        if(!message.mentions.channels.first()) return message.channel.send({embed: {color: "RED", description:`${message.author}, please mention a valid channel!`}})

        const role = message.guild.roles.cache.get("813990155668815892")
        if(!role) return message.channel.send({embed: {color: "RED", description:`${message.author}, role doesn't exist!**`}})

        await message.mentions.channels.forEach(async channel => {
            if (!channel.name.startsWith('🔒')) return message.channel.send({embed: {color: "RED", description:`**${channel.name}** is already unlocked!`}})
            await channel.setName(channel.name.substring(1))
            try {
                await channel.updateOverwrite(role, {
                    SEND_MESSAGES: true,
                    
                })
                
                message.channel.send({embed: {color: "GREEN", description:`**${channel.name}** has been unlocked!`}})

            } catch (err) {
                console.log(err)
                message.channel.send("Something has went wrong unlocking the channel!")
            }
        })
    }
    
}