function convertToJson(name, surname, eyeColor){
    let person = {
        firstName: name,
        lastName: surname,
        eyeColor
    };

    let personAsJson = JSON.stringify(person);

    console.log(personAsJson);
}

convertToJson("Maria", "Petrova", "brown");