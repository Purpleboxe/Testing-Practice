const calculator = require('../code/calculator');

const c = new calculator;

test ('test 1', () => {
    expect(c.add(20, 53)).toBe(73);
});

test ('test 2', () => {
    expect(c.subtract(20, 53)).toBe(-33);
});

test ('test 3', () => {
    expect(c.multiply(20, 53)).toBe(1060);
});

test ('test 4', () => {
    expect(c.divide(24, 2)).toBe(12);
});