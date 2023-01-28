function biggerHalf(array) {
    array.sort((a, b) => a - b);
    const newArray = [];
    for (let index = Math.floor(array.length / 2); index < array.length; index++) {
        newArray.push(array[index])
    }
    return newArray ;
}
biggerHalf([4, 7, 2, 5])