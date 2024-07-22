function solve(arrOne, arrTwo){
    let length = Math.max(arrOne.length, arrTwo.length);
    let areIdentical = true;
    let sum = 0;
    let diffIndex = null;

    for(let i = 0; i < length; i++){
        if (arrOne[i] != arrTwo[i]){
            areIdentical =false;
            diffIndex = i;
            break;
        } else {
            sum += Number(arrOne[i]);
        }
    }

    if(areIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
    }
}

solve(['1'], ['10']);