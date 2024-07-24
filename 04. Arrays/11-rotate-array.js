function rotate(array, countRotation) {
    for (let i = 1; i <= countRotation; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));
}

rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15);