function hasEnoughLength(password) {
    return (password.length >= 6 && password.length <= 10);
}

function hasOnlyAlphanumericSymbols(password) {
    let isValid = true;

    for (let char of password) {
        if (!isAlphanumeric(char)) {
            isValid = false;
        };
    }

    return isValid;
}

function hasEnoughDigits(password) {
    let digitsCount = 0;
    for (let char of password) {
        if (isDigit(char)) {
            digitsCount++;
        }
    }

    return digitsCount >= 2;
}

function isAlphanumeric(char) {
        return isLetter(char) || isDigit(char);
    }

function isLetter(char) {
    return (char >= 'A' && char <= 'Z') ||
               (char >= 'a' && char <= 'z');
}

function isDigit(char) {
    return char >= '0' && char <= '9';
}

function isValid(password) {
    let isValid = true;

    if (!hasEnoughLength(password)) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    if (!hasOnlyAlphanumericSymbols(password)) {
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }

    if (!hasEnoughDigits(password)) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

isValid('Pa$s$s');