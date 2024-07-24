function solve(input) {
   
    for (i = 0; i < input.length; i++) {
        let swap = false;
        for (j = 0; j < input.length - 1 - i; j++) {
            if (input[j] > input[j + 1]) {
                let temp = input[j];
                input[j] = input[j + 1];
                input[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) {
            break;
        }
    }
    let result = [input[0], input[1]];
    console.log(result.join(' '));
}

solve([3, 0, 10, 2, 7, 3]);