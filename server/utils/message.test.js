const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () =>{
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var testMessage = generateMessage(from, text);

        expect(testMessage).toMatchObject({from, text});
        expect(typeof testMessage.createdAt).toBe('number');

    })
});



describe('generateLocationMessage', () =>{
    it('should generate correct location object', () => {
        var from = 'Jen';
        var latitude = 456;
        var longitude = 123;

        var testMessage = generateLocationMessage(from, latitude, longitude);

        expect(testMessage).toMatchObject({from});
        expect(testMessage.url).toBe(`https://www.google.com/maps?q=456,123`);
        //expect(testMessage.url).toMatchObject({longitude});
        expect(typeof testMessage.createdAt).toBe('number');

    })
});