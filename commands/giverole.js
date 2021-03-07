module.exports = {
    name: 'giverole',
    minArgs: 2,
    expectedArgs: "<Target user's @> <The role name>",
    
    execute(message, arguments) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
        const targetUser = message.mentions.users.first()
        if(!targetUser) {
            
            message.channel.send({embed: {color: "RED", description:`${message.author}, Please mention a member!`}})
            return;
        }

        //-giveRole @member <role>
        //[ '@', 'member', '<role>']

        arguments.shift()

        const roleName = arguments.join(' ')
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })
        if(!role) {
            message.channel.send({embed: {color: "RED", description:`${message.author}, There is no role called **${roleName}**`}})
            return;
        }

        const member = guild.members.cache.get(targetUser.id)
        member.roles.add(role)

        message.channel.send({embed: {color: "GREEN", description:`Successfully gave ${targetUser} **${roleName}**!`}})
        
    }
    else {
        message.reply("You don't have to permission to use this command!")
    }
}
}