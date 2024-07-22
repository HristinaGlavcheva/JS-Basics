function printDayOfWeek(number) {
    const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thirsday',
    'Friday',
    'Saturday'
];

    if (daysOfWeek[number]) {
        console.log(daysOfWeek[number]);
    } else {
        console.log('Invalid day!');
    }
}

printDayOfWeek(-1);