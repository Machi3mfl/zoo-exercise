const Tiger = require('./Tiger');

describe('Tiger class', () => {
    it('should have an animal sound defined', () => {
        const tiger = new Tiger();
        expect(tiger.animalSound).toBeDefined();
        expect(tiger.animalSound).toEqual('grrr');
    })

    it('should have a speak method', () => {
        const tiger = new Tiger();
        expect(tiger.speak).toBeDefined();
    })

    it('should speak with the animal sound', () => {
        console.log = jest.fn();
        const tiger = new Tiger();
        tiger.speak("Lions suck")
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith("Lions grrr suck grrr");
    })
})