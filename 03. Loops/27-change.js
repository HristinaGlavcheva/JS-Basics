function change(amount){
    let counter = 0;

    let twoLv = Math.floor(amount / 2);
    let oneLv = Math.floor(amount - twoLv * 2);

    let stotinkiLeft = (amount * 100) % 100;
    let fiftySt = Math.floor(stotinkiLeft / 50);
    stotinkiLeft -= fiftySt * 50;
    let twentySt = Math.floor(stotinkiLeft / 20);
    stotinkiLeft -= twentySt * 20;
    let tenSt = Math.floor(stotinkiLeft / 10);
    stotinkiLeft -= tenSt * 10;
    let fiveSt = Math.floor(stotinkiLeft / 5);
    stotinkiLeft -= fiveSt * 5;
    let twoSt = Math.floor(stotinkiLeft / 2);
    stotinkiLeft -= twoSt * 2;
    let oneSt = stotinkiLeft > 0 ? 1 : 0;

    counter = twoLv + oneLv + fiftySt + twentySt + tenSt + fiveSt + twoSt + oneSt;
    console.log(counter);
}

change(2);