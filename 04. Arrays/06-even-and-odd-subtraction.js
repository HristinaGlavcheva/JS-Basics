function solve(numbers){
    let sumEven = 0;
    let sumOdd = 0;

    for(let element of numbers){
        if(element % 2 == 0){
            sumEven += element;
        } else {
            sumOdd += element;
        }
    }

    console.log(sumEven - sumOdd);
}

solve([2, 4, 6, 8, 10]);