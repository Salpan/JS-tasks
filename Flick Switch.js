// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

function flickSwitch(array) {

    return [...array].reduce((acc, item) => {
        return item !== 'flick' ? acc.concat(true) : acc.concat(false)
    }, [])
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']))

function flickSwitch2(arr) {
    return arr.reduce((a, c, i) => i == 0 ? a.concat(c == 'flick' ? false : true) : a.concat(c == 'flick' ? !a[a.length - 1] : a[a.length - 1]), []);
}

console.log(flickSwitch2(['codewars', 'flick', 'code', 'wars']))

function flickSwitch3(arr) {
    let returning = true;
    return arr.map((word) => {
        return (word === "flick") ? returning = !returning : returning;
    })
}

console.log(flickSwitch3(['codewars', 'flick', 'code', 'wars']))






