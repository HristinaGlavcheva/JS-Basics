function solve(input){
    let result = [];
    for(i = 1; i < input.length; i+=2){
        result.unshift(input[i] * 2);
    }

    console.log(result.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);