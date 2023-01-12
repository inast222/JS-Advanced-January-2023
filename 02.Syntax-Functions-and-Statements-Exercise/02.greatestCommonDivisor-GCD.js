function greatestCommonDivisor(a, b) {

    if (b !== 0) {
        return greatestCommonDivisor(b, a % b);
    } else {
        console.log(a);
    }
}
gCD(15, 5)