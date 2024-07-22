function calc(budget, count, saberPrice, robePrice, beltPrice){
    let totalSaberPrice = Math.ceil(count * 1.1) * saberPrice;
    let totalRobePrice = count * robePrice;
    let totalBeltPrice = beltPrice * (count - Math.floor(count / 6));
    
    let totalPrice = totalSaberPrice + totalRobePrice + totalBeltPrice;

    if(totalPrice <= budget){
        console.log(`The money is enough - it would cost ${totalPrice.toFixed(2)}lv.`)
    }
    else{
        console.log(`George Lucas will need ${(totalPrice - budget).toFixed(2)}lv more.`)
    }
}

calc(100, 42, 12.0, 4.0, 3.0);