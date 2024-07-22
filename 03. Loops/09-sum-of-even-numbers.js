function sumOfEvenNumbers(n){
    let sum = 0;
    for(let i = 2; i <= 2*n; i+=2){
        sum += i;
    }
    console.log(sum);
}

sumOfEvenNumbers(5);