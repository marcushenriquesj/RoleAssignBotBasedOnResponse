import { Client, GatewayIntentBits } from 'discord.js';
import { Filter } from 'bad-words';

async function startBot() {
    const filter = new Filter();

    const client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildMembers
        ]
    });

    const TOKEN = 'Your_Discord_Bot_token';
    const INTRO_CHANNEL_ID = 'Discord_Introduction_channel_ID';
    const ROLE_ID = 'Role_to_Grant_To_User_ID';

   client.once('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('messageCreate', async (message) => {
        console.log(`Received a message from ${message.author.tag} in channel ${message.channel.id}`);

        if (message.author.bot) {
            console.log(`Ignored a message from a bot: ${message.author.tag}`);
            return;
        }

        if (message.channel.id !== INTRO_CHANNEL_ID) {
            console.log(`Ignored a message in a non-introduction channel: ${message.channel.name}`);
            return;
        }

        const wordCount = message.content.split(/\s+/).length;
        console.log(`Message from ${message.author.tag} contains ${wordCount} words.`);

        if (wordCount < 30) {
            await message.delete();
            message.author.send(`Your message in #${message.channel.name} was too short. Please make sure your introduction is at least 75 words.`);
            console.log(`Deleted short message from ${message.author.tag} and sent a DM.`);
        } else {
            if (filter.isProfane(message.content)) {
                await message.delete();
                await message.guild.members.ban(message.author.id, { reason: 'Inappropriate content in introduction message.' });
                console.log(`Banned ${message.author.tag} for inappropriate content.`);
            } else {
                const member = await message.guild.members.fetch(message.author.id);
                if (!member.roles.cache.has(ROLE_ID)) {
                    await member.roles.add(ROLE_ID);
                    console.log(`Assigned role to ${member.user.tag}`);
                } else {
                    console.log(`User ${member.user.tag} already has the role.`);
                }
            }
        }
    });

    client.login(TOKEN).catch(err => {
        console.error('Failed to login:', err);
    });
}

startBot();