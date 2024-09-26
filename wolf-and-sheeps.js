function warnTheSheep(queue) {
    const n = queue.length - queue.indexOf('wolf') - 1
    let write = ''
    if (queue.indexOf('wolf') === queue.length - 1) write = 'Pls go away and stop eating my sheep'
    else write = `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
    return write
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]))