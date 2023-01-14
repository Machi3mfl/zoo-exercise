const Animal = require('./Animal');

describe('Animal class', () => {
    it('should return error when animal sound is not defined', () => {
        try {
            new Animal()
        }catch(error){
            expect(error.message).toEqual('Animal sound is required');
        }
    })

    it('should return error when speak method is called', () => {
        try {
            const animal = new Animal('sound');
            animal.speak('Hello');
        }catch(error){
            expect(error.message).toEqual('Method must be implemented');
        }
    })
})