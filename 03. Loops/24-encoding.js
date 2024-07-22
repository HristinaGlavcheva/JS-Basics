function encoding(number) {
    while (number >= 1) {
        let lastDigit = number % 10;
        let askiiCode = lastDigit + 33;
        let symbol = String.fromCharCode(askiiCode);

        if (lastDigit == 0) {
            console.log('ZERO');
        }

        for (let i = 1; i <= lastDigit; i++) {
                console.log(symbol);
        }
        number = Math.floor(number / 10);
    }
}

encoding(9347439);