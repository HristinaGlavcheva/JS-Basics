function reverse(n, numbers){
    let reversedNumbers = [];

    for(let i = n-1; i >=0; i--){
        let number = numbers[i];
        reversedNumbers.push(number);
    }

    console.log(reversedNumbers.join(' '));
}

reverse(2, [66, 43, 75, 89, 47]);