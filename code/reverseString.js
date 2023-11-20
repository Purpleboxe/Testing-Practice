function reverseString (str) {
    if (!str.length) {
        return null;
    }

    return str.split('').reverse().join('');
}

module.exports = reverseString;