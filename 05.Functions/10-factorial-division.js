function factorial(number){
    let factorial = 1;
    for(let i = 2; i <= number; i++){
        factorial *= i;
    }

    return factorial;
}

function factorialDivision(numberOne, numberTwo){
    let result = factorial(numberOne) / factorial(numberTwo);

    console.log(result.toFixed(2));
}

factorialDivision(6, 2);