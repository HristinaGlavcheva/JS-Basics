function charsBetween(charOne, charTwo){
    asciiCharOne = charOne.charCodeAt(0);
    asciiCharTwo = charTwo.charCodeAt(0);

    let result = [];
    for(let asciiCode = asciiCharOne + 1; asciiCode < asciiCharTwo; asciiCode++){
        result.push(String.fromCharCode(asciiCode));
    }

    console.log(result.join(' '));
}

charsBetween('#', 'C');