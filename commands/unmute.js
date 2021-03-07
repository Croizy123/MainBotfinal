
module.exports = {
    name: 'unmute',
    description: "this command unmutes",
    execute(message, args) {
        if(message.member.permissions.has("BAN_MEMBERS")) {
        const target = message.mentions.users.first();
        if(target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === '👪┋Neuling');
            let muteRole = message.guild.roles.cache.find(role => role.name === '🔇┋Muted┋🔇');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id)
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted!`)
        }
        else {
            message.channel.send("I can't find that member!");
        }
    }
    else {
        message.reply("You don't have the permission to unmute members!")
    }
    }
}