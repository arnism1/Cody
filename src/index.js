// ❌ Deprecated V12, 08/2021. Missing Intents for Client

const { Collection, Client } = require("discord.js");
  const client = new Client({
    disableMention: "everyone",
});

      // Require Modules and Init the Client
      const mongoose = require("./database/mongoose");
      const path = require("path");
      const fs = require("fs");

      const config = require("./config.json");
      module.exports = client;

      // Require the Bots Collections and Settings 
      client.commands = new Collection();
      client.prefix = config.prefix;
      client.aliases = new Collection();
      client.guildSettings = new Collection();
      client.userSettings = new Collection();

// load the Command and Handlers for the Bot, commands not in these paths, won't work.
client.categories = fs.readdirSync(path.resolve("src/commands"));
["command"].forEach((handler) => {
  require(path.resolve(`src/handlers/${handler}`))(client);
});

// Init the Database and login the Bot
mongoose.init();
client.login(config.token);
require("./dashboard/index")(client);
