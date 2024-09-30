function noOdds(values) {
    return values.filter((number) => {
        return number % 2 === 0
    })
}

console.log(noOdds([0, 1, 2, 3, 4, 5, 6, 7, 8]))