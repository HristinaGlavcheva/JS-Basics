function endsInN(n){
    for(let i = 1; i <= 1000; i++){
        if(i % 10 == n){
            console.log(i)
        }
    }
}

endsInN(0);