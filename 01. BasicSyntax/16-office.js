function total(price1){
    let price2 = price1 *0.8;
    let price3= (price1 + price2) * 1.15;
    let totalPrice = price1 + price2 + price3;
    console.log(totalPrice.toFixed(3));
}

total(455.30);