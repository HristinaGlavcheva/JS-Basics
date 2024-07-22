function sum(numbers){
    let firstElement = numbers[0];
    let lastElement = numbers[numbers.length - 1];

    let firstNumber = Number(firstElement);
    let lastNumber = Number(lastElement);

    let sum = firstNumber + lastNumber;
    console.log(sum);
}

sum(['20', '30', '40']);