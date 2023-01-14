const Animal = require('./Animal');
const { addWordInPhrase } = require('../utils');

class Lion extends Animal {
    constructor(){
        super("roar");
    }

    speak(phrase){
        const sound = addWordInPhrase(phrase, this.animalSound);
        console.log(sound);
    }
}

module.exports = Lion;