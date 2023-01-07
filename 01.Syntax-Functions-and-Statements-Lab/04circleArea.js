function circleArea(input) {
    let inputType=typeof(input);
    let area=0;
    if(inputType==='number'){
        // A = π r²
        area=Math.PI*input*input;
        console.log(area.toFixed(2))
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }

}
circleArea(5)
circleArea('name')