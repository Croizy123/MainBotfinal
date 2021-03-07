module.exports = {
    name: 'contact',
    description: "contact",
    execute(message, args, Discord) {
        const userAthor = message.author.toString();
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`**Contact**`)
        .setDescription("")
        .addFields(
            {name: '**E-Mail**', value: `Croizyy@protonmail.com`, inline: true},
            {name: '**Test**', value: `Test`, inline: true}
        )
        message.author.send(newEmbed)
        message.channel.send(`Contact info has been send to ${userAthor}!`)
    }
}