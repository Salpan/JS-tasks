const flip = (d, a) => {
    return a.sort((x, y) => d === 'R' ? x - y : y - x)
}

console.log(flip('L', [2, 3, 6, 1, 8]))
console.log(flip('R', [2, 3, 6, 1, 8]))

