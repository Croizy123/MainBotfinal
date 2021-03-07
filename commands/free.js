const ms = require('ms');
module.exports = {
    name: 'free',
    description: "this command free",
    execute(message, args) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
        const target = message.mentions.users.first();
        if(target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === '👤┋Member┋👤');
            let knastRole = message.guild.roles.cache.find(role => role.name === 'Knast');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]) {
                memberTarget.roles.add(mainRole.id);
                memberTarget.roles.remove(knastRole.id)
                message.channel.send({embed: {color: "GREEN", description:`<@${memberTarget.user.id}> is free!`}})
                return;
            }
            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(knastRole.id)
            message.channel.send({embed: {color: "GREEN", description:`<@${memberTarget.user.id}> is free!`}})
        }
        else {
            message.channel.send({embed: {color: "RED", description:`I can't find that member!`}})
        }
    }
    else {
        message.reply("You don't have to permission to use this command!")
    }
    }
}