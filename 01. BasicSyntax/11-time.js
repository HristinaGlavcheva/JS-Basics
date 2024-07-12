function time(minutes){
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    console.log(h + ":"  + m);
}

time(325);