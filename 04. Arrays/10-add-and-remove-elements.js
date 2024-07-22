function solve(input){
    let number = 1;
    let result = [];

    for(let i = 0; i < input.length; i++){
        if(input[i] == 'add'){
            result.push(number);
            number++;
        } else if (input[i] == 'remove'){
            result.pop();
        }
    }

    if(result.length == 0){
        console.log('Empty')
    } else {
        console.log(result.join(' '));
    }
}

solve(['add', 'add', 'add', 'add']);