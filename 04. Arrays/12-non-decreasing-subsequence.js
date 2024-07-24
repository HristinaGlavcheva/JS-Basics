function extract(input) {
    let biggestNumber = input[0];
    let resultArray = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggestNumber) {
            biggestNumber = input[i];
            resultArray.push(biggestNumber);
        }
    }

    console.log(resultArray.join(' '));
}

extract([20, 3, 2, 15, 6, 1]);