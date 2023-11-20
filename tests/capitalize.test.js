const capitalize = require('../code/capitalize');

test ('test 1', () => {
    expect(capitalize('hello!')).toBe('Hello!');
});

test ('test 2', () => {
    expect(capitalize('this is a long sentence!')).toBe('This is a long sentence!');
});

test ('test 3', () => {
    expect(capitalize('salutations to the digital cosmos: "Hello, World!"')).toBe('Salutations to the digital cosmos: "Hello, World!"');
});