function sum(input){
    let result = 0;
    for(let element of input){
        element = Number(element);

        if(element % 2 == 0){
            result += element;
        }
    } 

    console.log(result);
}

sum(['1','2','3','4','5','6']);