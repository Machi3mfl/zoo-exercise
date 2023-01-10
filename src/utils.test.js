const { addWordInPhrase } = require('./utils');

describe('Utils', () => {
    describe('+ addWordInPhrase', () => {
        it('should return a string with a word concatenated to each word in a phrase', () => {
            const phrase = "Hello world how are you";
            const word = 'meow';
            const result = addWordInPhrase(phrase, word);
            expect(result).toBe('Hello meow world meow how meow are meow you meow');
        });

        it('should return error when word is not defined', () => {
            try {
                const phrase = "Hello world";
                addWordInPhrase(phrase)
            }catch(error){
                expect(error.message).toEqual('Word is required');
            }
        })
    })
})