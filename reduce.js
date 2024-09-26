function reduce(arr) {
    return arr.reduce((acc, name, index) => {
        if (index !== 0) {
            return `${acc}, ${name.toUpperCase()}`
        }

        return `${acc}: ${name.toUpperCase()}`
    }, 'My famaly')
}

console.log(reduce(['Ruslan', 'Dina', 'Aslan']))

function factorialFromReduce(number) {
    const array = new Array(number)
        .fill(number)
        .map((_, index) => index + 1)
        .reduce((acc, number) => acc * number)
    return array
}

console.log(factorialFromReduce(5))