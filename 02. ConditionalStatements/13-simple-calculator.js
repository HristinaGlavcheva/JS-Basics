function calculate(numberOne, numberTwo, operation){
    let result;
    if(operation == 'add') {
        result = numberOne + numberTwo;
    } else if (operation == 'subtract') {
        result = numberOne - numberTwo;
    } else if (operation == 'multiply') {
        result = numberOne * numberTwo;
    } else if (operation == 'divide') {
        result = numberOne / numberTwo;
    }

    console.log(result.toFixed(2));
}

calculate(3.1, 0.1, 'multiply');