function solve(oneLv, twoLv, fiveLv, sum){
    for(let i = 0; i <= oneLv; i++){
        for(let j = 0; j <= twoLv; j++){
            for(let k = 0; k <= fiveLv; k++){
                if(i * 1 + j * 2 + k * 5 == sum){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

solve(5, 3, 1, 7);