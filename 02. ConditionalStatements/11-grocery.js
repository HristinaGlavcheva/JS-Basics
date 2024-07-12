function calcPrice(product, city, quantity){
    let price;

    if (city == 'Sofia'){
        switch(product){
            case 'tea':
                price = 0.50;
                break;
            case 'water':
                price = 0.80;
                break;
            case 'juice':
                price = 1.20;
                break;
            case 'sweets':
                price = 1.45;
                break;
            case 'chips':
                price = 1.60;
                break;
        }
    } else if (city == 'Plovdiv'){
        switch(product){
            case 'tea':
                price = 0.40;
                break;
            case 'water':
                price = 0.70;
                break;
            case 'juice':
                price = 1.15;
                break;
            case 'sweets':
                price = 1.30;
                break;
            case 'chips':
                price = 1.50;
                break;
        } 
    }else if (city == 'Varna'){
            switch(product){
                case 'tea':
                    price = 0.45;
                    break;
                case 'water':
                    price = 0.70;
                    break;
                case 'juice':
                    price = 1.10;
                    break;
                case 'sweets':
                    price = 1.35;
                    break;
                case 'chips':
                    price = 1.55;
                    break;
            }
    }

    let totalPrice = price * quantity;
    console.log(totalPrice.toFixed(2));
    }


    
calcPrice('sweets', 'Plovdiv', 1);