function townData(town){
    for(let key in town){
        console.log(key + ' -> ' + town[key]);
    }
}

townData({
    name: "Sofia",
    population: 1234567,
    country: "Bulgaria",
    postcode: "1000"
    });