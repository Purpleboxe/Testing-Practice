function caesarCipher (str, shift) {
    if (shift === 0) {
        return str;
    }

    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let isUpper = char === char.toUpperCase();

        if (char.match(/[A-Za-z]/)) {
            let code = str.charCodeAt(i);

            code = (code - (isUpper ? 65 : 97) + shift) % 26 + (isUpper ? 65 : 97);

            char = String.fromCharCode(code);
        }

        result += char;
    }

    return result;
}

module.exports = caesarCipher;