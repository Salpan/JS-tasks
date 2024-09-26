/*
elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"
*/

function elevator(left, right, call) {
    let lift = ''
    right === call || right === left ? lift = 'right' : left === call ? lift = 'left' : right - call === 1 || call - right === 1 ? lift = 'right' : lift = 'left'
    return lift
}

console.log(elevator(0, 1, 0))


