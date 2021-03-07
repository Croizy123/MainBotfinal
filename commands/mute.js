const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "this command mutes",
    execute(message, args) {
        if(message.member.permissions.has("BAN_MEMBERS")) {
        const target = message.mentions.users.first();
        if(target) {

            let mainRole = message.guild.roles.cache.find(role => role.name === '👪┋Neuling');
            let muteRole = message.guild.roles.cache.find(role => role.name === '🔇┋Muted┋🔇');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id)
                message.channel.send(`<@${memberTarget.user.id}> has been muted!`)
                return;
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been muted!`)

            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id)
            }, ms(args[1]));
        }
        else {
            message.channel.send("I can't find that member!");
        }
    }
    else {
        message.reply("You don't have to permission to mute members!")
    }
    }
}