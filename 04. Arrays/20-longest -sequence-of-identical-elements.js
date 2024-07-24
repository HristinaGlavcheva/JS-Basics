function solve(input) {
    let maxLength = 1;
    let result = [];
    
    for (let i = 0; i < input.length - 1; i++) {
        let currentSequence = [];
        currentSequence.push(input[i]);
        let counter = 1;

        while (input[i] === input[i + 1]) {
            counter++;
            i++;
            currentSequence.push(input[i]);
        }

        if(counter >= maxLength){
            maxLength = counter;
            result = currentSequence;
        }
    }

    console.log(result.join(' '));
}

solve([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);