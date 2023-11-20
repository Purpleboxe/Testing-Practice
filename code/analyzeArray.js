function analyzeArray (arr) {
    if (arr.length === 0) {
        return null;
    }

    let object = {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };

    return object;
}

module.exports = analyzeArray;