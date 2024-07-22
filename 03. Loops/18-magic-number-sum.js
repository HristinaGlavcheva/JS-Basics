function magicSum(numberOne, numberTwo, magicNumber){
    let combination = 0;
    let found = false;
    let first = 0;
    let second = 0;

    for(i = numberOne; i<= numberTwo; i++){
        for(j = numberOne; j <= numberTwo; j++){
            combination++;
            if(i + j == magicNumber){
                found = true;
                first = i;
                second = j;
                break;
            }
        }

        if(found){
            break;
        }
    }

    if(found){
        console.log(`Combination ${combination} - (${first} + ${second} = ${magicNumber})`);
    }
    else{
        console.log(`${combination} combinations - neither equals ${magicNumber}`);
    }
}

magicSum(23, 24, 20);