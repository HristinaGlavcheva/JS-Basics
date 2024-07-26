function sum(a, b){
    return a + b;
}

function subtract(s, d){
    return s - d;
}

function sumAndSubtract(a, b, c){
    return subtract(sum(a, b), c);
}

console.log(sumAndSubtract(42, 58, 100));