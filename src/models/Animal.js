const { addWordInPhrase } = require('../utils');

class Animal {
    constructor(animalSound){
        if(!animalSound){
            throw new Error('Animal sound is required');
        }
        this.animalSound = animalSound;
    }

    // clase abstracta
    speak(phrase){
        const sound = addWordInPhrase(phrase, this.animalSound);
        console.log(sound);
    }
}

module.exports = Animal;