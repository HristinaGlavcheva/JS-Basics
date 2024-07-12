function speed(distance, hours, min, sec){
    let seconds = hours * 60 *60 + min * 60 + sec;
    let speed = distance / seconds;
    console.log(speed.toFixed(6));
}

speed(600, 7, 35, 55);