const arr = [-5, 1, -3, -4, -3, 1, 5, -3]

let newArray = arr.sort((a, b) => a - b).reverse().reduce((acc, number, index) => {
    acc = number + acc - number
    return acc
})

// console.log(newArray)

// console.log(arr.length)


// [ 5,  1,  1, -3, -3, -3, -4, -5 ] = 10

const sumOfDifferences1 = arr => arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)

console.log(sumOfDifferences1(arr))

const sumOfDifferences = arr => arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);

console.log(sumOfDifferences(arr))

// console.log(arr.sort((a, b) => b - a))



