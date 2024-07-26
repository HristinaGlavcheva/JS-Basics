function findShortestAndLongest(input) {
    let wordsArray = input.trimEnd().split(' ');
    let shortest = wordsArray[0];
    let longest = wordsArray[0];

    for (let word of wordsArray) {
       word = word.trim();
        if (word.includes('?') ||
            word.includes('.') ||
            word.includes(',') ||
            word.includes('!')) {
            word = word.substring(0, word.length - 1);
        }

        if (word.length < shortest.length) {
            shortest = word;
        }

        if (word.length > longest.length) {
            longest = word;
        }
    };

    console.log(`Longest -> ${longest}`);
    console.log(`Shortest -> ${shortest}`);
}


findShortestAndLongest('Lorem Ipsum is dummy text of the typesetting industry.');