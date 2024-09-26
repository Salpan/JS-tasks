/*
doTest('C', 'B', 1);
doTest('b', 'a', 1);
doTest('d', 'd', 1);
doTest('A', 's', 0);
doTest('c', 'B', 0);
doTest('b', 'Z', 0);
doTest('\t', 'Z', -1);
doTest('H', ':', -1);
*/

function sameCase(a, b) {
    if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
        return -1
    } else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    } else {
        return 0
    }
}

sameCase = (a, b) => /[a-z]/i.test(a) && /[a-z]/i.test(b) ? Number(/[a-z]/.test(a) == /[a-z]/.test(b)) : -1