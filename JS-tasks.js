
/*
Task 1
На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих

Input: [2,4], [1,3]
Actions:
Output: [3,7]

Input: [1,7], [9,3]
Actions:
Output: [10, 10]
*/

function task1(arr1, arr2) {
    const arr3 = [arr1[0] + arr2[0], arr1[1] + arr2[1]];

    return arr3;
}

// console.log('task1', task1([1, 5], [2, 7]));

function task1_1(arr1, arr2) {
    let arr3 = [];

    for (let index = 0; index <= arr1.length - 1; index += 1) {
        arr3.push(arr1[index] + arr2[index]);
    }

    return arr3;
}

// console.log('task1_1', task1_1([1, 5], [2, 7]));

function task1_2(arr1, arr2) {
    const arr3 = arr1.map((item, index) => {
        return item + arr2[index]
    })

    return arr3
}

// console.log('task1_2', task1_2([1, 5, 6, 8], [2, 7, 12, 0]));

// function task1_3(arr1, arr2) {
//     if (arr1.length >= arr2.length) {
//         return arr1.reduce((acc, number, index) => {
//             const num2 = arr2[index] ?? 0;
//             acc.push(number + num2)
//             return acc
//         }, [])
//     }

//     return arr2.reduce((acc, number, index) => {
//         const num2 = arr1[index] ?? 0;
//         acc.push(number + num2)
//         return acc
//     }, [])
// }


// console.log('task1_3', task1_3([1, 5, 6, 8], [2, 7, 12, 8, 3]));

/*
Task 2
Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два

Input: [1,2,3,4,5]
Output: [2,4,6,8,10]

Input: [7,14]
Output: [14,28]
*/

function task2(arr1) {
    return arr1.map((number) => number * 2)
}

// console.log('task2', task2([1, 2, 3, 4, 5]))

/*
Task 3
Напишите функцию, которая преобразует имя и фамилию в шаблон My Name Is: $Name $Surname

Input: "Anakin", "SkyWalker"
Actions:
Output: My Name Is: Anakin SkyWalker
*/

function task3(name, surname) {
    return `My Name Is: ${name} ${surname}`
}

// console.log(task3('Ruslan', 'Salpanov'))

/*
Task 4
Напишите функцию, которая принимает два массива чисел и возвращает массив чисел, 
которые есть в обоих массивах. Значения должны быть уникальны

Input: [1,2,3,4,5], [1,12,3,8,5]
Output: [1,3,5]

Input: [7,14, 14], [14,28]
Output: [14]
*/

// function task4(arr1, arr2) {
//  for (i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] = arr2[i]) {

//     }
//  }
// }

function task4(arr1, arr2) {
    const arr3 = new Set(arr1.filter((num) => {
        return arr2.includes(num)
    }))
    return Array.from(arr3)
}

// console.log(task4([7, 14, 14, 28, 1], [14, 28]))

/*
Task 5
Напишите функцию, которая принимает массив объектов и 
возвращает объект с ключами взятыми из полей token и значения объекта. 
Каждый объект содержит уникальный ключ в token

Input: [{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]

Output: 
{
    '1': {token: 1}, 
    '2': {token: 2, value:23}, 
    '3': {token: 3, name:'superman'}, 
    '4': {token: 4}
}
*/

function task5(arr1) {
    return arr1.reduce((acc, obj) => {
        acc[obj.token] = obj
        return acc
    }, {})

}

console.log(task5([{ token: '1' }, { token: '2', value: 23 }, { token: '3', name: 'superman' }, { token: '4' }]))

