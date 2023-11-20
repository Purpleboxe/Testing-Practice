function capitalize (str) {
    if (!str.length) {
        return null;
    }

    return str[0].toUpperCase() + str.slice(1);
}

module.exports = capitalize;