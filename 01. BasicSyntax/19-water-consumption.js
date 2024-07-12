function calculateConsumption(weeklyConsumption, peopleCount){
    let dailyConsumption = weeklyConsumption / 7 / peopleCount;
    console.log(dailyConsumption.toFixed(2));
}

calculateConsumption(980, 7);