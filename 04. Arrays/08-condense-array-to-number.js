function condense(input){
       while(input.length >= 2){
        let newArr= [];

        for(let i = 0; i <= input.length - 2; i++){
            newArr.push(input[i] + input[i + 1]);
        }
        input = newArr;
    }
    
    console.log(input[0]);
}

condense([5,0,4,1,2]);