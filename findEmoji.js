const emotion = require('emoji-emotion');

function findEmoji(word) {
    const match = emotion.find(emojiObj => word === emojiObj.name);

    if (match) {
        // console.log(match.emoji);
        return match.emoji;
    } else {
        // console.log(word);
        return word;
    }    
}

module.exports = findEmoji;