function calcFactorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    console.log(result);
}

calcFactorial(10);