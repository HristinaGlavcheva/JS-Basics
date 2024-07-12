function dayOfWeek(number){
    let day;

    switch(number){
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thirsday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6: 
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "Error";        
    }

    console.log(day);
}

dayOfWeek(8);