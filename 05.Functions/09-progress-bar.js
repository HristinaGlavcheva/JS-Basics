function progressBar(percent){
    let countPercents = Math.floor(percent / 10);
    let countDots = 10 - countPercents;
    let progressBar = '';

    for(let i = 1; i <= countPercents; i++){
        progressBar += '%';
    }

    for(let i = 1; i <= countDots; i++){
        progressBar +='.';
    }

    console.log(`${percent}% [${progressBar}]`);
    
    if(percent == 100){
        console.log('Complete!')
    } else {
        console.log('Loading...');
    }
}

progressBar(50);