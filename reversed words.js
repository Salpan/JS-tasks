
let str = 'The greatest victory is that which requires no battle'

function reverseWords(str) {
    let newArray = str.split(' ')
    return newArray = newArray.reduceRight((acc, word) => {
        return `${acc} ${word}`
    })
}

console.log(reverseWords(str))

const revers = str.split(' ').reverse().join(' ')

console.log(revers)

const arr = ['My', 'mom', 'is', 'the', 'best']

const revers2 = arr.join(`${arr.map((_, index) => index + 1)}`)

console.log(revers2)