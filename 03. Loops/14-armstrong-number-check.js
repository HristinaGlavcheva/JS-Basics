function check(number){
    let sum = 0;
    let counter = 0;
    let initialNumber = number;
    let countingNumber = number;

    while(countingNumber > 0){
        countingNumber = Math.floor(countingNumber / 10);
        counter ++;
    }

    while(number > 0){
        lastDigit = number % 10;
        number = Math.floor(number / 10);
        sum += Math.pow(lastDigit, counter);
    }

    if(sum == initialNumber){
    console.log('true');
    }
    else{
        console.log('false')
    }
}

check(1634);