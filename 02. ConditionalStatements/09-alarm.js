function alarm(currentHour, currentMinutes){
    let resultHour;
    let resutMinutes;

    if(currentMinutes < 45){
        resultHour = currentHour;
        resutMinutes = currentMinutes + 15;
    }
    else {
        resutMinutes = currentMinutes + 15 - 60;
        resultHour = currentHour + 1;
        if(resultHour == 24){
            resultHour = 0;
        }
    }

    console.log(resultHour + ":" + resutMinutes.toString().padStart(2, 0));
}

alarm(12, 48);