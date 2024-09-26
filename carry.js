function carry(welcomWord) {
    return function makeSentens(name) {
        return `${welcomWord}, ${name} `
    }
}

const a = carry('Welcome')

console.log(a('Ruslan'))


const makeSentens = (firstWord) => {
    return (secondName) => {
        return `${firstWord}, ${secondName}`
    }
}

console.log(makeSentens('Hello')('Mr.Sam'))