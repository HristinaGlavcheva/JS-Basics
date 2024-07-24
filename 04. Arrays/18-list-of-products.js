function solve(input) {
    //input.sort();
    for (let i = 0; i < input.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] < input[minIndex]) {
                minIndex = j;
            }
        }

        let temp = input[minIndex];
        input[minIndex] = input[i];
        input[i] = temp;
    }

    console.log(input.join(' '));
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);