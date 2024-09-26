const str = 'this is my string'

// const arr = [a, e, i, o, u]

function vowel2index(str) {
    const arr = str.split('')
        .map((word, index) => {
            switch (word) {
                case 'a':
                    word = index + 1;
                    break;
                case 'e':
                    word = index + 1;
                    break;
                case 'i':
                    word = index + 1;
                    break;
                case 'o':
                    word = index + 1;
                    break;
                case 'u':
                    word = index + 1;
                    break;
            }
            return word;
        })
        .join('')
    return arr
}

console.log(str)

console.log(vowel2index(str))
