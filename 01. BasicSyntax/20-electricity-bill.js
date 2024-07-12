function calcElectricity(consumption, rate){
    let totalBill = consumption * rate + 10;
    console.log(totalBill);
}

calcElectricity(150, 1.1);