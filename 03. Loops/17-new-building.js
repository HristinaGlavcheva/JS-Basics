function building(floors, rooms) {
    for (f = floors; f > 0; f--) {
        let floor = '';

        for (r = 0; r < rooms; r++) {
            let type = 'A';

            if (f == floors) {
                type = 'L';
            } else if (f % 2 == 0) {
                type = 'O';
            }

            floor += type + f + r + ' ';
        }

        console.log(floor.trimEnd());
    }
}

building(4, 4);