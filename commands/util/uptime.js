// todo: fix
module.exports = {
    config: {
        name: 'uptime',
        description: 'Get uptime of the bot',
        usage: `/uptime`,
    },
    async run (bot,message,args) {
        const uptimeInMs = bot.uptime;
        const seconds = (Math.floor(uptimeInMs / 1000) % 60);
        const minutes = (Math.floor(seconds / 60) % 60);
        const hours = (Math.floor(minutes / 60) % 24);

        message.channel.send(`I have been up for: ${hours}:${minutes}:${seconds}`);
    }
}
