function solve(k, input){
    let firstK = [];
    let lastK = [];

    for(let i = 0; i <= k - 1; i++){
        firstK.push(input[i]);
    }

    for(let i = input.length - k; i < input.length; i++){
        lastK.push(input[i]);
    }

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

solve(3, [6, 7, 8, 9]);