const Lion = require('./Lion');

describe('Lion class', () => {
    it('should have an animal sound defined', () => {
        const lion = new Lion();
        expect(lion.animalSound).toBeDefined();
        expect(lion.animalSound).toEqual('roar');
    })

    it('should have a speak method', () => {
        const lion = new Lion();
        expect(lion.speak).toBeDefined();
    })

    it('should speak with the animal sound', () => {
        console.log = jest.fn();
        const lion = new Lion();
        lion.speak("I'm a lion")
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith("I'm roar a roar lion roar");
    })
})