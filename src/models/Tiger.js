const Animal = require('./Animal');

class Tiger extends Animal {
    constructor(){
        super("grrr");
    }

    speak(phrase){
        super.speak(phrase);
    }
}

module.exports = Tiger;