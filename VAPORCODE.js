
function vaporcode(string) {
    const arr = string.split(' ').join('').toUpperCase()
    const newArr = [...arr].reduce((acc, letter, index) => {
        acc = acc + letter + '  '
        return acc
    }, '')
    return newArr.slice(0, newArr.length - 1)
}

console.log(reducer('Hellow world'))