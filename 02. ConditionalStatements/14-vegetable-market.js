function calcPrice(vegetable, day, quantity){
    let price;
    if(day == 'Saturday' || day == 'Sunday'){
        switch(vegetable){
            case 'tomato':
                price = 2.80;
                break;
            case 'onion':
                price = 1.30;
                break;
            case 'lettuce':
                price = 0.85;
                break;
            case 'cucumber':
                price = 1.75;
                break;
            case 'pepper':
                price = 5.50;
                break;
            default: 
                price = 0;
        }
    } else if (day == 'Monday'
            || day == 'Tuesday'
            || day == 'Wednesday'
            || day == 'Thirsday'
            || day == 'Friday'){
            switch(vegetable){
                case 'tomato':
                    price = 2.50;
                    break;
                case 'onion':
                    price = 1.20;
                    break;
                case 'lettuce':
                    price = 0.85;
                    break;
                case 'cucumber':
                    price = 1.45;
                    break;
                case 'pepper':
                    price = 3.50;
                    break;
                default:
                    price = 0;
            }
        }
    else {
        price = 0;
    }

    let totalPrice = price * quantity;

    if(totalPrice == 0){
        console.log('error');
    }
    else{
        console.log(totalPrice.toFixed(2));
    }
}

calcPrice('pepper', 'Frinday', 5);