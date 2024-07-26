function printSmallest(numberOne, numberTwo, numberThree){
    let smaller = findSmaller(numberOne, numberTwo);
    let smallest = findSmaller(smaller, numberThree);
    
    console.log(smallest);
}

function findSmaller(firstNumber, secondNumber){
    return firstNumber < secondNumber ? firstNumber : secondNumber;
}

printSmallest(600, 342, 123);