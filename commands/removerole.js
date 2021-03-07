module.exports = {
    name: 'removerole',
    minArgs: 2,
    expectedArgs: "<Target user's @> <The role name>",
    permission: "ADMINISTRATOR",
    execute(message, arguments) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
        const targetUser = message.mentions.users.first()
        if(!targetUser) {
            
            message.channel.send({embed: {color: "RED", description:`${message.author}, Please mention a member!`}})
            return;
        }

        //-removeRole @member <role>
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
        
        if(member.roles.cache.get(role.id)) {
            member.roles.remove(role)
            message.channel.send({embed: {color: "RED", description:`**${roleName}** has been removed from ${targetUser}`}})
        }
        else {
            message.channel.send({embed: {color: "RED", description:`${targetUser} does not have **${roleName}**`}})
        }
    }
    else {
        message.reply("You don't have to permission to use this command!")
    }
}
}