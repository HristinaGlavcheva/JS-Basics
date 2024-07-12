function painting(yellow){
    let red = yellow / 4;
    let white = yellow * 2;
    let total = yellow + red + white;
    console.log("Red: " + red);
    console.log("Yellow: " + yellow);
    console.log("White: " + white);
    console.log("Total: " + total);
}

painting(42);