const emotion = require('emoji-emotion');
const rhymes = require('rhymes');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function findEmoji(word) {
    const match = emotion.find(emojiObj => word === emojiObj.name);

    if (match) {
        // console.log(match.emoji);
        return match.emoji;
    } else {
        const rhymingWords = rhymes(word);
        if (rhymingWords.length > 0) {
            // console.log(rhymingWords);
            const randomIndex = getRandomInt(rhymingWords.length);
            // return rhymingWords[1].word;
            return rhymingWords[randomIndex].word;
        } else {
            // console.log(word);
            return word;
        }
    }    
}

module.exports = findEmoji;