class Animal {
    constructor(animalSound){
        if(!animalSound){
            throw new Error('Animal sound is required');
        }
        this.animalSound = animalSound;
    }

    speak(phrase){
        throw new Error('Method must be implemented');
    }
}

module.exports = Animal;