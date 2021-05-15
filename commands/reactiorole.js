module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {

        const channel = '780132187395588157';
        const spanishrole = message.guild.roles.cache.find(role => role.name === "Spanish");
        const frenchrole = message.guild.roles.cache.find(role => role.name === "French");
        const italianrole = message.guild.roles.cache.find(role => role.name === "Italian");
        const hindirole = message.guild.roles.cache.find(role => role.name === "Hindi");
        const catalanrole = message.guild.roles.cache.find(role => role.name === "Catalan");
        const mandarinrole = message.guild.roles.cache.find(role => role.name === "Mandarin");
        const russianrole= message.guild.roles.cache.find(role => role.name === "Russian");
        const portugueserole= message.guild.roles.cache.find(role => role.name === "Portuguese");
        const japaneserole = message.guild.roles.cache.find(role => role.name === "Japanese");
        const scandinavianrole = message.guild.roles.cache.find(role => role.name === "Scandinavian");
        const germanrole = message.guild.roles.cache.find(role => role.name === "German");
        const esperantorole = message.guild.roles.cache.find(role => role.name === "Esperanto");
        const dutchrole = message.guild.roles.cache.find(role => role.name === "Dutch");
        const hungarianrole = message.guild.roles.cache.find(role => role.name === "Hungarian");
        const englishrole= message.guild.roles.cache.find(role => role.name === "English");
        const malayrole= message.guild.roles.cache.find(role => role.name === "Malay");

        const spanishemoji = '🇪🇸';
        const frenchemoji = '🇫🇷';
        const italianemoji = '🇮🇹';
        const hindiemoji = '🇮🇳';
        const catalanemoji = '📙';
        const mandarinemoji = '🇨🇳';
        const russianemoji = '🇷🇺';
        const portugueseemoji = '🇵🇹';
        const japaneseemoji = '🇯🇵';
        const scandinavianemoji = '🔵';
        const germanemoji = '🇩🇪';
        const esperantoemoji = '📗';
        const dutchemoji = '🇳🇱';
        const englishemoji = '🇬🇧';
        const hungarianemoji = '🇭🇺';
        const malayemoji = '🇲🇾';

        let embed = new Discord.MessageEmbed()
            .setColor('#3B78D4')
            .setTitle('Select the languages you speak or are learning by clicking on the emojis below this message')
            .setDescription('Choosing languages will allow you to easily interact with other members of the server!\n\n'
                + `${englishemoji}  - English\n`
                + `${spanishemoji} - Spanish\n`
                + `${frenchemoji}  - French\n`
                + `${italianemoji}  - Italian\n`
                + `${hindiemoji}  - Hindi\n`
                + `${catalanemoji}  - Catalan\n`
                + `${mandarinemoji}  - Mandarin\n`
                + `${russianemoji}  - Russian\n`
                + `${portugueseemoji}  - Portuguese\n`
                + `${japaneseemoji}  - Japanese\n`
                + `${scandinavianemoji}  - Scandinavian (Swedish/Danish/Norwegian)\n`
                + `${germanemoji}  - German\n`
                + `${esperantoemoji}  - Esperanto\n`
                + `${hungarianemoji}  - Hungarian\n`
                + `${malayemoji}  - Malay\n`
                + `${dutchemoji}  - Dutch`
                );
 
        let messageEmbed = await message.channel.send(embed);
        
        messageEmbed.react(spanishemoji);
        messageEmbed.react(frenchemoji);
        messageEmbed.react(italianemoji);
        messageEmbed.react(hindiemoji);
        messageEmbed.react(catalanemoji);
        messageEmbed.react(mandarinemoji);
        messageEmbed.react(russianemoji);
        messageEmbed.react(portugueseemoji);
        messageEmbed.react(japaneseemoji);
        messageEmbed.react(scandinavianemoji);
        messageEmbed.react(germanemoji);
        messageEmbed.react(esperantoemoji);
        messageEmbed.react(dutchemoji);
        messageEmbed.react(englishemoji);
        messageEmbed.react(hungarianemoji);
        messageEmbed.react(malayemoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === spanishemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(spanishrole);
                }
                else if (reaction.emoji.name === frenchemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(frenchrole);
                }
                else if (reaction.emoji.name === italianemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(italianrole);
                }
                else if (reaction.emoji.name === hindiemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(hindirole);
                }
                else if (reaction.emoji.name === catalanemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(catalanrole);
                }
                else if (reaction.emoji.name === mandarinemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mandarinrole);
                }
                else if (reaction.emoji.name === russianemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(russianrole);
                }
                else if (reaction.emoji.name === portugueseemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(portugueserole);
                }
                else if (reaction.emoji.name === japaneseemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(japaneserole);
                }
                else if (reaction.emoji.name === scandinavianemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(scandinavianrole);
                }
                else if (reaction.emoji.name === germanemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(germanrole);
                }
                else if (reaction.emoji.name === esperantoemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(esperantorole);
                }
                else if (reaction.emoji.name === dutchemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dutchrole);
                }
                else if (reaction.emoji.name === englishemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(englishrole);
                }
                else if (reaction.emoji.name === hungarianemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(hungarianrole);
                }
                else if (reaction.emoji.name === malayemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(malayrole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === spanishemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(spanishrole);
                }
                else if (reaction.emoji.name === frenchemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(frenchrole);
                }
                else if (reaction.emoji.name === italianemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(italianrole);
                }
                else if (reaction.emoji.name === hindiemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(hindirole);
                }
                else if (reaction.emoji.name === catalanemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(catalanrole);
                }
                else if (reaction.emoji.name === mandarinemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mandarinrole);
                }
                else if (reaction.emoji.name === russianemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(russianrole);
                }
                else if (reaction.emoji.name === portugueseemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(portugueserole);
                }
                else if (reaction.emoji.name === japaneseemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(japaneserole);
                }
                else if (reaction.emoji.name === scandinavianemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(scandinavianrole);
                }
                else if (reaction.emoji.name === germanemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(germanrole);
                }
                else if (reaction.emoji.name === esperantoemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(esperantorole);
                }
                else if (reaction.emoji.name === dutchemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dutchrole);
                }
                else if (reaction.emoji.name === englishemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(englishrole);
                }
                else if (reaction.emoji.name === hungarianemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(hungarianrole);
                }
                  else if (reaction.emoji.name === malayemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(malayrole);
                }
            } else {
                return;
            }
        });

    }
 
}   
