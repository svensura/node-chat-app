var expect = require('expect');

var {isRealString} = require('./validation')

describe('isRealString', () =>{
    it('should reject non-string-values', () => {
        var testString = 123;
        
        expect(isRealString(testString)).toBe(false);
     })

    it('should reject string with only spaces', () => {
        var testString = '    ';
        
        expect(isRealString(testString)).toBe(false);
     })

    it('should allow string with non-space chars', () => {
        var testString = 'abcd';
        
        expect(isRealString(testString)).toBe(true);
     })
});



