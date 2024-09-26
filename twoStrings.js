
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"


function blabla(s1, s2) {

    let s3 = ''
    for (let i = 0; i < s1.length; i += 1) {
        if (s1[i] === '+' && s2[i] === '+') {
            s3 += '+'
        } else if (s1[i] === '-' && s2[i] === '-') {
            s3 += '-'
        }
        else s3 += '0'
    }
    return s3
}

console.log(blabla('+-+--+', '+--+++'))

function neutralise(s1, s2) {

    return [...s1].reduce((acc, item, i) => item === s2[i] ? acc.concat(item) : acc.concat(0), '')
}

console.log(neutralise('+-+--+', '+--+++'))

