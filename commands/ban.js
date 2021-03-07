module.exports = {
    name: 'ban',
    description: "this command bans",
    execute(message, args) {
        if(message.member.permissions.has("BAN_MEMBERS")) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
            
        }
        
        else{
            message.channel.send("I can't ban that member!");
        }
    }
        else {
            message.channel.send("You don't have the permissions to ban members!");
        }
        

    }
}