function calcVacationPrice(days, roomType, assessment){
    let nights = days - 1;
    let price;
    
    if(nights < 10){
        switch(roomType){
            case 'single room':
                price = 25;
                break;
            case 'apartment':
                price = 50 * 0.7;
                break;
            case 'president apartment':
                price = 100 * 0.9;
                break;
        }
    } else if (nights >= 10 && nights <= 15){
        switch(roomType){
            case 'single room':
                price = 25;
                break;
            case 'apartment':
                price = 50 * 0.65;
                break;
            case 'president apartment':
                price = 100 * 0.85;
                break;
        }
    } else {
            switch(roomType){
                case 'single room':
                    price = 25;
                    break;
                case 'apartment':
                    price = 50 * 0.5;
                    break;
                case 'president apartment':
                    price = 100 * 0.8;
                    break;
        }
    }

    let totalPrice;

    if(assessment = 'positive'){
        totalPrice = price * nights * 1.25;
    } 
    else{
        totalPrice = price * nights * 0.9;
    }

    console.log(totalPrice.toFixed(2));
}

calcVacationPrice(30, "president apartment", "negative");