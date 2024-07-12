function printReference(age, gender){
    let reference;

    if(gender == "m"){
        if(age >= 16){
            reference = "Mr.";
        }
        else{
            reference = "Master";
        }
    }
    else{
        if(age >= 16){
            reference = "Ms.";
        }
        else{
            reference = "Miss"
        }
    }

    console.log(reference);
}

printReference(10, "m");