const Discord = require('discord.js')
module.exports = {
    name: 'purge',
    description: 'purges',
    async execute(message, args, Discord) {
        if(!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR", "MANAGE_MESSAGES"])) {
            return message.channel.send({embed: {color: "RED", description:"You don't have the permission to use this command!"}})
        }

        if(!message.guild.me.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR", "MANAGE_MESSAGES"]))
            return message.channel.send({embed: {color: "RED", description:"You don't have the permission to use this command!"}})
            if(!args[0]) return message.channel.send({embed: {color: "RED", description:"You must state a number of messages to purge. \`-purge <amount>\`"}})
            const amountToDelete = Number(args[0], 10)

        if(isNaN(amountToDelete)) return message.channel.send({embed: {color: "RED", description:"This isn't a valid number!"}})
        if(!Number.isInteger(amountToDelete)) return message.channel.send({embed: {color: "RED", description:"Please state a whole number!"}})
        if(!amountToDelete || amountToDelete < 2 || amountToDelete > 200) return message.channel.send({embed: {color: "RED", description:"Please state a number between 2 and 200!"}})
        const fetched = await message.channel.messages.fetch({
            Limit: amountToDelete
        })
        try {
            await message.channel.bulkDelete(fetched)
            .then(messages => message.channel.send({embed: {color: "GREEN", description:`Successfully deleted \`${amountToDelete}\` messages!`}}))
        } catch (err) {
            console.log(err);
            message.channel.send("I was unable to delete this amount of messages. Please make sure they are within 14 days old!")
        } 
    }
}