module.exports = {
    name: 'kick',
    description: "this command kicks",
    execute(message, args) {
        if(message.member.permissions.has("KICK_MEMBERS")) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
            
        }
        
        else{
            message.channel.send("I can't kick that member!");
        }
    }
        else {
            message.channel.send("You don't have the permissions to kick members!");
        }
        

    }
}