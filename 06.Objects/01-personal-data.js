function personalData(name, surname, age){
    let person = {
        firstName: name,
        lastName: surname,
        age: age
    }

    return person;
}

console.log(personalData("Ivan","Ivanov", 29));