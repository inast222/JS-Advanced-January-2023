function negativeAndPositiveNumbers(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = Number(array[i]);
        if (element >= 0) {
            newArray.push(element)
        } else {
            newArray.unshift(element)
        }
    }
    console.log(newArray.join('\n'))
}
negativeAndPositiveNumbers([7, -2, 8, 9])