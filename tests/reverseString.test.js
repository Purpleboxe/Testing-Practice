const reverseString = require('../code/reverseString');

test ('test 1', () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
});

test ('test 2', () => {
    expect(reverseString('racecar')).toBe('racecar');
});

test ('test 3', () => {
    expect(reverseString('gobbledygook')).toBe('koogydelbbog');
});