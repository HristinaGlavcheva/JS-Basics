function fibonacciSum(n){
    let sum = 1;
    let firstNumber = 1;
    let secondNumber = 1;

    for(let i = 2; i <= n; i++){
        sum += secondNumber;
        let newNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = newNumber;
    }

    if(n == 0){
        sum = 0;
    }

    console.log(sum);
}

fibonacciSum(0);