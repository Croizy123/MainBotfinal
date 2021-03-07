module.exports = {
    name: 'poll',
    description: "poll",
    execute(message, args, Discord) {
        const userAthor = message.author.toString();
        
        if(message.member.permissions.has("ADMINISTRATOR")) {
        let sendMessage = message.content.substring(5);
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`__**Umfrage**__`)
        .setDescription(sendMessage)
        .setFooter(`Author: ${message.author.tag} | MainBot`)
        
            
        
        message.delete();
        message.channel.send(newEmbed)
        .then(msg => msg.react('✅'))
        .then(mReaction => mReaction.message.react('❌'))
        }
        else {
            message.channel.send(`${userAthor}, You don't have the permission to use this command.`)
        }
    }
}