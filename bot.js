const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('status word ingesteld!')
    bot.user.setStatus('Online')
    bot.user.setActivity('bot is online!')
});

const prefix = "!";

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    if(cmd === `!kick`){
  
  
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Can't find user!");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
  
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Tiime", message.createdAt)
      .addField("Reason", kReason);
  
      let kickChannel = message.guild.channels.find(`name`, "incidents");
      if(!kickChannel) return message.channel.send("Can't find incidents channel.");
  
      message.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);
  
      return;
    }
  
    if(cmd === `!ban`){
  
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("Can't find user!");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
  
      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Ban~")
      .setColor("#bc0000")
      .addField("Banned User", `${bUser} with ID ${bUser.id}`)
      .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Banned In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", bReason);
  
      let incidentchannel = message.guild.channels.find(`name`, "incidents");
      if(!incidentchannel) return message.channel.send("Can't find incidents channel.");
  
      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banEmbed);
  
  
      return;
    }
  
  
    if(cmd === `!report`){
  
        
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user.");
      let rreason = args.join(" ").slice(22);
  
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", rreason);
  
      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
  
  
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
  
      return;
    }
  
  
  
  
    if(cmd === `!serverinfo`){
  
      let sicon = message.guild.iconURL;
      let serverembed = new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor("#15f153")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinedAt)
      .addField("Total Members", message.guild.memberCount);
  
      return message.channel.send(serverembed);
    }
  
  
  
    if(cmd === `!botinfo`){
  
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Created On", bot.user.createdAt);
  
      return message.channel.send(botembed);
    }
  
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

