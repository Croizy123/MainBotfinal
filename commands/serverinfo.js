module.exports = {
    name: 'serverinfo',
    description: "serverinfo",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        
        .setTitle(`**Server:** __**${message.guild.name}**__`)
        .setColor('#0099ff')
        
        .addField("**Server Owner**", "test")
        
        
        message.channel.send(newEmbed)
    }
}