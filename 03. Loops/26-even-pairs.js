function evenPairs(firstPairInitial, secondPairInitial, firstDiff, secondDiff) {
    let firstPairFinal = firstPairInitial + firstDiff;
    let secondPairFinal = secondPairInitial + secondDiff;

    for (let i = firstPairInitial; i <= firstPairFinal; i++) {
        for (let j = secondPairInitial; j <= secondPairFinal; j++) {
            let firstIsPrime = true;
            for (let k = 2; k < i; k++) {
                if (i % k == 0) {
                    firstIsPrime = false;
                }
            }

            let secondIsPrime = true;
            for (let l = 2; l < j; l++) {
                if (j % l == 0) {
                    secondIsPrime = false;
                }
            }

            if (firstIsPrime && secondIsPrime) {
                console.log(i.toString() + j.toString());
            }
        }
    }
}

evenPairs(10, 30, 9, 6)