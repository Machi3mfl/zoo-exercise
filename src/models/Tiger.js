const Animal = require('./Animal');
const { addWordInPhrase } = require('../utils');

class Tiger extends Animal {
    constructor(){
        super("grrr");
    }

    speak(phrase){
        const sound = addWordInPhrase(phrase, this.animalSound);
        console.log(sound);
    }
}

module.exports = Tiger;