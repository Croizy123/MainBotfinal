module.exports = {
    name: 'help',
    description: "Help",
    execute(message, args, Discord) {
       
        const newEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`__**Help**__`)
        .setDescription("Please choose one section!")
        .addFields(

            
            {name: '**-helpCommands**', value: "⚙️", inline:true},
            {name: '**-helpModerator**', value: "⚙️", inline:true},
            {name: '**-helpAdmin**', value: "⚙️", inline:true},
            {name: '**-helpOther**', value: "⚙️", inline:true},
        )
        .setFooter("MainBot | Version 1.0")
        message.channel.send(newEmbed)
    }
}