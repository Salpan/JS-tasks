function init() {
    let num = 0

    return {
        inc: function () {
            num += 1
            return this
        },
        dec: function () {
            num -= 1
            return this
        },
        resoult: function () {
            return num
        }
    }
}

const calc = init().inc().inc().resoult()

console.log(calc)



