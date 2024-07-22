function rageExpences(lostGames, headsetPrice, mousePrice, keyboardPrice, displayPrice){
    let headsetExpences = Math.floor(lostGames / 2) * headsetPrice;
    let mouseExpences = Math.floor(lostGames / 3) * mousePrice;
    let keyboarExpences = Math.floor(lostGames / 6) * keyboardPrice;
    let displayExpences = Math.floor(lostGames / 12) * displayPrice;
    let totalRageExpences = headsetExpences + mouseExpences + keyboarExpences + displayExpences;

    console.log(`Rage expenses: ${totalRageExpences.toFixed(2)} lv.`);
}

rageExpences(23, 12.50, 21.50, 40, 200);