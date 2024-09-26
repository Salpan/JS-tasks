function favoriteFive(number) {

    if (number < 0) {
        const minusNumber = number * -1
        return number * 5 ** minusNumber.toString().length
    } else {
        return number * 5 ** number.toString().length
    }
}

console.log(favoriteFive(3))
console.log(favoriteFive(10))
console.log(favoriteFive(200))
console.log(favoriteFive(0))
console.log(favoriteFive(-3))


// 3 -->    15  (  3 * 5¹)
// 10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//  0 -->     0  (  0 * 5¹)
// -3 -->   -15  ( -3 * 5¹)