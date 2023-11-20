const analyzeArray = require('../code/analyzeArray');

test ('test 1', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});

test ('test 2', () => {
    expect(analyzeArray([6,4,6,3,8,3])).toEqual({average: 5, min: 3, max: 8, length: 6});
});

test ('test 2', () => {
    expect(analyzeArray([10,23,55,32,70])).toEqual({average: 38, min: 10, max: 70, length: 5});
});