function newArray(arr) {
    return arr.map((word) => {
        return word.toUpperCase()
    })
}

console.log(newArray(['ruslan', 'dina']))