const Animal = require('./Animal');

class Lion extends Animal {
    constructor(){
        super("roar");
    }

    speak(phrase){
        super.speak(phrase);
    }
}

module.exports = Lion;