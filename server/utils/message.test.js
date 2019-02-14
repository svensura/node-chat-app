var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () =>{
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var testMessage = generateMessage(from, text);

        expect(testMessage).toMatchObject({from, text});
        expect(typeof testMessage.createdAt).toBe('number');

    })
});