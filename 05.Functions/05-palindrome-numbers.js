function isPalindrome(number){
    let isPalindrome = true;
    let numberAsString = number.toString();

    for(let i = 0; i < numberAsString.length / 2; i++){
        if(numberAsString[i] !== numberAsString[numberAsString.length - 1 - i]){
            isPalindrome = false;
        }
    }

    console.log(isPalindrome);
}

function solve(input){
    for(let number of input){
        isPalindrome(number)
    }
}

solve([32,2,232,1010])

