function solve(input){
    let oddSum = 0;
    let evenSum = 0;
    let inputAsString = input.toString();

    for(let i = 0; i < inputAsString.length; i++){
        let currentDigit = Number(inputAsString[i]);

        if(currentDigit % 2 == 0){
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(3495892137259234);