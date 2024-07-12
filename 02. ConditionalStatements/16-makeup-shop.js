function calcProfit(
        renovationPrice, 
        powders, 
        lipsticks,
        spirals,
        shadows,
        correctors){
            let totalPrice = powders * 2.60 + lipsticks * 3 + spirals * 4.10 + shadows * 8.20+ correctors * 2;
            
            if((powders + lipsticks + spirals + shadows + correctors) >= 50){
                totalPrice *= 0.75;
            }

            let profit = totalPrice * 0.9;
            let moneyDifference = Math.abs(profit - renovationPrice);

            if(profit > renovationPrice){
                console.log(`Yes! ${moneyDifference.toFixed(2)} BGN left.`);
            }
            else{
                console.log(`Not enough money! ${moneyDifference.toFixed(2)} BGN needed.`)
            }
        }

        calcProfit(320, 8, 2, 5, 5, 1);