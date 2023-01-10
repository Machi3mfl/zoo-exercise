const Animal = require('./Animal');

describe('Animal class', () => {
    it('should return error when animal sound is not defined', () => {
        try {
            new Animal()
        }catch(error){
            expect(error.message).toEqual('Animal sound is required');
        }
    })
})