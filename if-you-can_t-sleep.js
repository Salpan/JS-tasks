var countSheep = function (num) {

    const array = new Array(num).fill(num).map((item, index) => {
        return item = `${index + 1} sheep...`
    }).join('')

    return array
}

console.log(countSheep(5))