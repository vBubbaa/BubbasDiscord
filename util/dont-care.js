module.exports.doesTheBotCare = (message) => {
    // 25% chance
    let chance = Math.random() < .3;
    if (chance) {
        message.reply('Don\'t care.')
    }
}