function convertToObject(jsonString){
    let object = JSON.parse(jsonString);
    
    for(let key in object){
        console.log(`${key}: ${object[key]}`);
    }
}

convertToObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');