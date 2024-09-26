// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

function quadrants(x, y) {
    let quadro = 0

    if (x > 0 && y > 0) quadro = 1
    else if (x > 0 && y < 0) {
        quadro = 4
    } else if (x < 0 && y < 0) {
        quadro = 3
    } else if (x < 0 && y > 0) {
        quadro = 2
    } return quadro

}

console.log(quadrants(-1, 6))

function quadrant(x, y) {
    return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
}