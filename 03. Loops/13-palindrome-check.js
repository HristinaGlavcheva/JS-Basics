function check(string){
    let newString = '';
    for(let i = string.length - 1; i >= 0; i--){ 
        newString += string[i];
    }

    if(newString === string){
        console.log('true');
    }
    else{
        console.log('false');
    }
}

check('madam');