const Discord = require('discord.js');


const { cpuUsage } = require('process');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

//prefix

const prefix = '-';

const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
client.once('ready', () => {
    console.log('Polyglotbot is ready to go!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return; 
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase(); 
    // test command

if(command === 'test'){
   message.channel.send('i refuse to do any tests');
}else if (command === 'reactionrole') {
    client.commands.get('reactionrole').execute(message, args, Discord, client);

}else if(command === 'help'){
    message.channel.send('If you need help contact one of the @ambassadors, @co-hosts or @johnxe');

}else if(command === 'ayuda'){
    message.channel.send('si necesitas ayuda contacta con alguno de los @ambassadors, @co-host or @johnxe');

}else if(command === 'aider'){
    message.channel.send('si vous avez besoin d`aide, contactez l´un des @ambassadors, @ co-host ou @johnxe');

}else if(command === '助けて'){
    message.channel.send('ヘルプが必要な場合は、@ambassadors、@co-host、または @johnxe のいずれかに連絡してください。');

}else if(command === 'hellobot'){
    message.channel.send('hey, im so happy to be here chatting with you!');
}

});  

//welcome bot

const channelId = "763829074082398220";
const generalchannel = "758795197638770731";
const rolechannelId = "780132187395588157";
client.on("guildMemberAdd", (member) => {
  console.log(member);

  const message = `Hello <@${member.id}>!\n\Welcome to **VR Language Exchange** ! Check out our ${member.guild.channels.cache.get(rolechannelId).toString()} channel to get a language role and send a message in ${member.guild.channels.cache.get(generalchannel).toString()} if you want to introduce yourself!`;

  const channel = member.guild.channels.cache.get(channelId);
  channel.send(message);
});



//client log (token)  

client.login('INSERT TOKEN');
