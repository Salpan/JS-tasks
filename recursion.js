const arr = [1, 2, 3, [3, 4, 5, [67, 2]]]

let arr2 = []

function getANewArray(arr) {
    for (let element of arr) {
        if (typeof element === 'object') {
            getANewArray(element)
        } else {
            arr2.push(element)
        }
    }
    return arr2
}

// getANewArray(arr)

console.log(getANewArray(arr))