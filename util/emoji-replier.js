const emojis = require('../constants/emojis');

module.exports.getRandomEmoji = (message) => {
    message.react(emojis[Math.floor(Math.random()*emojis.length)]);
}