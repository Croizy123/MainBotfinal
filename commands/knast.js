const ms = require('ms');
module.exports = {
    name: 'knast',
    description: "this command knast",
    execute(message, args) {
        if(message.member.permissions.has("ADMINISTRATOR")) {
        const target = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === '👤┋Member┋👤');
            let knastRole = message.guild.roles.cache.find(role => role.name === 'Knast');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(knastRole.id)
                message.channel.send({embed: {color: "GREEN", description:`<@${memberTarget.user.id}> is now in jail!`}})
                memberTarget.send({embed: {color: "RED", description:`<@${memberTarget.user.id}>, Miese Zeiten für dich... Lange Zeit hinter Gitter... \n Du wurdest von einem Moderator/Admin in den Knast geschickt`}})
                return;
                
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(knastRole.id)
            message.channel.send({embed: {color: "GREEN", description:`<@${memberTarget.user.id}> is now in jail!`}})
            memberTarget.send({embed: {color: "RED", description:`<@${memberTarget.user.id}>, Miese Zeiten für dich... Lange Zeit hinter Gitter... \n Du wurdest von einem Moderator/Admin in den Knast geschickt`}})
            setTimeout(function(){
                memberTarget.roles.remove(knastRole.id);
                memberTarget.roles.add(mainRole.id)
            }, ms(args[1]));
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