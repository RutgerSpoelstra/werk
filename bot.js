const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('status word ingesteld!')
    bot.user.setStatus('Away')
    bot.user.setGame('bot is online!')
});

bot.on('message', (message => {

    if(message.content == 'ping') {
        message.reply('pong');
    }
    if(message.content == '!streamteg') {
        let modRole = message.guild.roles.find("name", "Eigenaar")
        if(message.member.roles.has(modRole.id)) {
            message.channel.sendMessage('@everyone TheExplosiveGuy is nu live op youtube, kom kijken op: https://www.youtube.com/channel/UCrlQu0aftmlgzKLx9djEAHA');
        } else {
            message.channel.reply('u heeft hier geen toegang voor!');
        }
    }

    if(message.content == '!informatieteg') {

        let botembed = new Discord.RichEmbed()
        .setDescription("informatie over teg [TheExplosiveGuy]")
        .setColor("#365b96")
        .addField("Alexander:", "Alexander is zelf 12 jaar oud en is YouTube begonnen omdat hij dat leuk leek.")
        .addField("TEG Zelf:", "TheExplosiveGuy is een gaming channel waarop verschillende games worden geupload zoals Fortnite,Minecraft en veel meer dingen.");
        
        return message.channel.send(botembed);
    }
}))

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANNAGE_MESSAGES")) return message.reply("oof.");
    if(!args[0]) return message.channel.send("oof");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`cleared ${args[0]}$ messages`).then(msg => msg.delete(1000));
    })
}

module.exports.help = {
    name: "clear"
}

bot.login(process.env.BOT_TOKEN);
console.log("ben er klaar voor");

