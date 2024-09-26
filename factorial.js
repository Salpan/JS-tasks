// function factorial(number) {

//     const arr = new Array(number)
//     return new Array.from(number)
// }

// console.log(factorial(5))


function factorialByLoop(number) {
    let x = 1
    for (let i = 1; i <= number; i = i + 1) {
        x = i * x
    }
    return x
}



function factorialByReduce(number) {

    const arr = new Array(number).fill(0).map((_, index) => index + 1).reduce((acc, number) => {
        return acc * number
    }, 1)
    return arr
}



function factorialByRecursion(number) {
    if (number === 1) {
        return number
    } return number * factorialByRecursion(number - 1)
}

const num = 10

console.log(`Factorial by loop: ${factorialByLoop(num)}`)
console.log(`Factorial by reduce: ${factorialByReduce(num)}`)
console.log(`Factorial by recursion: ${factorialByRecursion(num)}`)