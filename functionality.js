const arr = ['+', '1', '0', '+', '1', '0', '/', '2']

const a = arr.toString()

const b = JSON.parse(JSON.stringify(arr))


console.log(a)
console.log(b)

console.log(eval(arr.reduce((acc, item) => {
    acc = acc + item
    return acc
})))



