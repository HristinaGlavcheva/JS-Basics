function calcHolidayPrice(budget, season){
    
    let destination;
    let ratio;
    let type;

    if(budget <= 100){
        destination = 'Bulgaria';
        switch(season){
            case 'summer':
                ratio =0.30;
                type = 'Camp';
                break;
            case 'winter':
                ratio = 0.70;
                type = 'Hotel';
                break;
        }
    } else if (budget <= 1000){
        destination = 'Europe';
        switch(season){
            case 'summer':
                ratio = 0.40;
                type = 'Camp';
                break;
            case 'winter':
                ratio = 0.80;
                type = 'Hotel';
                break;
        }
    } else{
        destination = 'Asia';
        type = 'Hotel';
        ratio = 0.90;
    }

    let amountSpent = ratio * budget;

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${amountSpent.toFixed(2)}`)
}

calcHolidayPrice(1500, 'summer');