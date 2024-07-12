function pathDecision(toolOne, toolTwo) {
    let path;
    if (toolOne == 'sword') {
        switch (toolTwo) {
            case 'shield':
                path = 'Path to the castle';
                break;
            default:
                path = 'Path to the forest';
        }
    } else if (toolOne == 'map') {
        switch (toolTwo) {
            case 'coins':
                path = 'Go to the town';
                break;
            default:
                path = 'Camp';
        }
    } else {
        path = 'Wander aimlessly';
    }

    console.log(path);
}

pathDecision('map', 'compass');