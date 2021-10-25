const client = require("../index");
const { Discord, MessageEmbed, Guild } = require("discord.js");

try {
  client.on("guildDelete", async (guild) => {
    const adminchannel = await client.channels.fetch("901571515244482570");
    const bots = guild.members.cache.filter((m) => m.user.bot).size;
    const owner = guild.owner.user.tag;

    const newserver = new MessageEmbed()
      .setTitle("Left Server")
      .setDescription(
        `${owner} - \`${guild.id}\` - **${guild.name}** - \`${guild.memberCount}\` members - \`${bots}\` bots`
      )
      .setColor("RED")
      .setTimestamp();
    
    adminchannel.send("<@578678204890349594>");
    adminchannel.send(newserver);
  });
} catch (error) {
  console.log(error);
}
