function calc(){
    let product;
    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            product = i * j;
            console.log(`${i} * ${j} = ${product}`);
        }
    }
}

calc();