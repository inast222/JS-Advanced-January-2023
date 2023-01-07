function sumOfNumbersNAndM(numOne, numTwo) {
    let n = Number(numOne);
    let m = Number(numTwo);
    let result = 0;
    
    for (let i = n; i <= m; i++) {
        result += i
    }
    console.log(result)
}
sumOfNumbersNAndM('1', '5')