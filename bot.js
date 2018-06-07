const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('everything is fine!')
  client.user.setStatus('Online');
  client.user.setActivity('Everything is aweysome');
})

client.on('message', message => {
   if (message.content == '!test') {
    message.channel.send('test terug');
  }
  if (message.content == '!kanalen') {
   let botembed = new Discord.RichEmbed()
   .setDescription("alle 2 de kanalen!")
   .setColor("#15f153")
   .addField("Alexander:", "https://www.youtube.com/channel/UCrlQu0aftmlgzKLx9djEAHA")
   .addField("Rutger:", "https://www.youtube.com/channel/UCNU8b_WKFgxY-jlnRFGO44g?view_as=subscriber");
  
   return message.channel.send(botembed);
  }

  if (message.content == '!hulp') {
    let botembed = new Discord.RichEmbed()
    .setDescription("alle hulp opties")
    .setColor("#15f153")
    .setTimestamp()
    .addField("u heeft hulp nodig? kies uit:", "1.vragen 2.buggs 3.connectie problemen 4.join link")
    .addField("doe !hulpkeuze<nummer> voor uw keuze!", "doe !hulpkeuze<nummer> voor uw keuze!")
    .addField("commands voor hulp:", "command1: !hulpkeuze1 command2: !hulpkeuze2 command3: !hulpkeuze 3 command4: !hulpkeuze4");

    return message.channel.send(botembed);
  }
  if (message.content == '!hulpkeuze1') {
    let botembed = new Discord.RichEmbed()
    .setDescription('u heeft vragen?')
    .setColor("#15f153")
    .addField("vragen?", "u had een vraag? die kunt u stellen aan @Just_Spoely#8348 of aan @TheExplosiveGuy#9285");

    return message.channel.send(botembed);
  }
  if (message.content == '!hulpkeuze2') {
    let botembed = new Discord.RichEmbed()
    .setDescription('u heeft buggs gevonden? meld ze!')
    .setColor("#15f153")
    .addField("buggs gevonden:", "u heeft buggs gevonden? top! meld ze in de channel #buggs zodat wij de server kunnen verbeteren alvast bedankt!");

    return message.channel.send(botembed);
  }
  if (message.content == '!hulpkeuze3') {
    let botembed = new Discord.RichEmbed()
    .setDescription('heeft u problemen met het verbinden naar de voice channels?')
    .setColor("#15f153")
    .addField("controleer internet", "controleer of u internet hebt en anders probeer uw internet opnieuw te verbinden.")
    .addField("opnieuw opstarten", "probeer discord opnieuw op te starten")
    .addField("pc opnieuw opstarten", "laat hierbij uw discord openstaan en zet uw pc of laptop uit. Wacht 3 seconden voordat je hem weer opstart")
    .addField("Discord uitvoeren als administrator", "sluit discord helemaal af. doe rechtermuisklik op Discord en dan uitvoeren als administrator.");

    return message.channel.send(botembed);
  }
  if (message.content == '!hulpkeuze4') {
    message.channel.send("join link: https://discord.gg/hTEvS8j");
  }
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

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

});

client.login(process.env.BOT_TOKEN);
