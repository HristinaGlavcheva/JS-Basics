function solve(contacts){
    let phonebook = {};
    for(let contact of contacts){
        let index = contact.indexOf(' ');
        let name = contact.slice(0, index);
        let phoneNumber = contact.slice(index + 1, contact.length);

        phonebook[name] = phoneNumber;
    }

    for(const name in phonebook){
        console.log(name +' -> ' + phonebook[name]);
    }
};

solve(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"]);