function reverse(n){
    // let nAsString = n.toString();
    // let length = nAsString.length;
    // let result = '';

    // for(let i = 0; i < length; i++){
    //     result += nAsString[length - i - 1];
    // }

    let result = '';
    while(n > 0){
        let lastDigit = n % 10;
        result += lastDigit.toString();
        n = Math.floor(n / 10);
    }

    console.log(result);
}

reverse(30201);