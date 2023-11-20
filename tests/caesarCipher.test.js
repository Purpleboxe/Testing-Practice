const caesarCipher = require('../code/caesarCipher');

test ('test 1', () => {
    expect(caesarCipher('HAHAHA', 5)).toBe('MFMFMF');
});

test ('test 2', () => {
    expect(caesarCipher('JavaScript is fun!', 50)).toBe('HytyQapgnr gq dsl!');
});

test ('test 3', () => {
    expect(caesarCipher('I used to be a baker because I kneaded dough!', 24)).toBe('G sqcb rm zc y zyicp zcaysqc G ilcybcb bmsef!')
});