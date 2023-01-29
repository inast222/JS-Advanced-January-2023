function processOddPositions(array) {
    let newArray=[];

    for(let i = 0 ;i<array.length;i++){
        if(i%2!==0){
            newArray.push(Number(array[i])*2);
        }
    }
    console.log(newArray.reverse())
}
processOddPositions([3, 0, 10, 4, 7, 3])