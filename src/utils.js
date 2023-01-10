
/**
 * Concatenate a phrase by adding the word to each word in the phrase
 * @param {*} phrase : string
 * @param {*} newWord : string
 * @returns string: phrase with word concatenated to each word
 */
const addWordInPhrase = (phrase, newWord) => {
    if(!newWord){
        throw new Error('Word is required');
    }
    return phrase.split(' ').map(word => `${word} ${newWord}`).join(' ');
}

module.exports = { 
    addWordInPhrase 
}