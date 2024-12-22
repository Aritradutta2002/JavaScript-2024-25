function stringToNumber(input) {
    const number = Number(input);
    if (!isNaN(number)) {
        return number;
    }
    return "Not a number";
}

function flipBoolean(input) {
    return !input;
}

function whatAmI(input) {
    if (typeof input === 'number') {
        return "I'm a number!";
    }
    if (typeof input === 'string') {
        return "I'm a string!";
    }
    if (typeof input === 'boolean') {
        return "I'm a boolean!";
    }
}

function isItTruthy(input) {
    if (input) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}
