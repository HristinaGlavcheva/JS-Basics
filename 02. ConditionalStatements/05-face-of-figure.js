function face(figure, a, b){
    let area;
    switch(figure){
        case "square":
            area = a * a;
            break;
        case "rectangle":
            area = a * b;
            break;
        case "triangle":
            area = (a * b) / 2;
            break;
        case "circle":
            area = Math.PI * a * a;
            break;
    }

    console.log(area.toFixed(2));
}

face("circle", 10);