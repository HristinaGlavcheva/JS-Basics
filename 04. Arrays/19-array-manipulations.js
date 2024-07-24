function solve(input){
    let arr = input[0].split(' ').map(Number);

    for(let i = 1; i < input.length; i++){
        let commandLine = input[i];
        let commandLineSplitted = commandLine.split(' ');
        let command = commandLineSplitted[0];
        commandLineOne = Number(commandLineSplitted[1]);
        commandLineTwo = Number(commandLineSplitted[2]);

        if(command == 'Add'){
            arr.push(commandLineOne);
        } else if(command == 'Remove'){
            let indexToRemoveAt = arr.indexOf(commandLineOne);
            arr.splice(indexToRemoveAt, 1);
        } else if(command == 'RemoveAt'){
            arr.splice(commandLineOne, 1);
        } else if(command == 'Insert'){
            let number = commandLineOne;
            let index = commandLineTwo;
            arr.splice(index, 0, number);
        }
    }

    console.log(arr.join(' '));
}

solve(["4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3"]);