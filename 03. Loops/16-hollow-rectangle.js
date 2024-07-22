function rectangle(rows, columns) {
    let fullRow = '';
    for (j = 1; j <= columns; j++) {
        fullRow += '*';
    }

    let hollowRow = '';
    for (let j = 1; j <= columns; j++) {
        if (j == 1 || j == columns) {
            hollowRow += '*';
        }
        else {
            hollowRow += '-';
        }
    }

    console.log(fullRow);
        for (let i = 2; i <= rows - 1; i++) {
            console.log(hollowRow);
        }
        console.log(fullRow);
}

rectangle(5, 10);