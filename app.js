import { Client, Intents } from 'discord.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { TOKEN, PREFIX } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Hello', { type: 'WATCHING' });
});

client.on('message', async (msg) => {
  if (msg.content === 'ping') {
    msg.channel.send('halo');
  }
});

client.login(TOKEN);
