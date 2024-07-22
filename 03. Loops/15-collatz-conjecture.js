function calc(n){
    let result = n.toString();
    while(n > 1){
        if(n % 2 == 0){
            n = n / 2;
        }
        else{
            n = n * 3 + 1;
        }

        result += ` ${n}`;
    }

    console.log(result);
}

calc(15);