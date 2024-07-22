function sumOddNumbers(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let oddNumber = 2 * i + 1;
        console.log(oddNumber);
        sum += oddNumber;
    }
    console.log(`Sum: ${sum}`);
}

sumOddNumbers(0);