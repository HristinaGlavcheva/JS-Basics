function calcBMI(weight, height){
    let bmiResult = weight / Math.pow(height, 2);
    console.log(bmiResult);
}

calcBMI(60, 1.75);