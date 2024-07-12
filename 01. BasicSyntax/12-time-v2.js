function time(minutes){
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    console.log(h.toString().padStart(2, 0) + ":"  + m.toString().padStart(2, 0));
}

time(325);