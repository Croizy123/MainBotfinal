module.exports = {
    name: 'regelwerk',
    description: "contact",
    execute(message, args, Discord) {
        
        const userAthor = message.author.toString();
        
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("__**Regelwerk**__")
        .setDescription("")
        .addFields(
            {name: '__**§ 1**__ \n', value: ` \n Beleidigungen oder Schimpfwörter sind auf diesem Server nicht erwünscht, und werden mit Strafen geahndet.`},
            {name: '__**§ 2**__', value: `Avatare, Nicknamen und Beschreibungen dürfen keine pornographischen, rassistischen oder beleidigenden Inhalte beinhalten.`},
            {name: '__**§ 3**__', value: `Der Umgang mit anderen Discord Benutzern sollte stets freundlich sein. Verbale Angriffe gegen andere Personen oder Sexuelle/beleidigende Anspielungen sind strengstens untersagt.`},
            {name: '__**§ 4**__', value: `Werbung jeglicher Art ist auf dem Server verboten. Es sei denn einer der Teamleitung hat dies erlaubt.`},
            {name: '__**§ 5**__', value: `Wer den Anweisungen des Server-Admins bzw. der Supporter nicht folgt wird verwarnt und im Ernstfall gekickt. Sollte sich dies häufen, ist ein Bann zu erwarten.`},
            {name: '__**§ 6**__', value: `Es sind alle Benutzer angehalten, die Discord-Server Regeln zu beachten. Sollte ein Regelverstoß von einem Benutzer erkannt werden, ist dieser umgehend einem Admin zu melden.`},
            {name: '__**§ 7**__', value: `Rassismus, Sexismus, Pornographie oder jegliche Art von Diskriminierung ist strengstenst untersagt und wird gerechtmässig bestraft.`},
            {name: '__**§ 8**__', value: `Der Handel mit Echtgeld und anderen Wertgegenständen ist strengstens untersagt.`},
            {name: '__**§ 9**__', value: `Administratoren behalten sich das Recht auf einen dauerhaften Bann vor!`},
            {name: '__**§ 10**__', value: `Beim Betreten des Servers stimmst du den Regeln automatisch zu.`},
        )
        .setFooter("Author: Croizy#0001 | MainBot")
        
        message.channel.send(newEmbed)
    }
}