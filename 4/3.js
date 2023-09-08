"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

function generateArray() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    return array;
}

function getArraySum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function getArrayMin(array) {
    return Math.min(...array);
}

function getIndexesArray(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            newArr.push(i);
        }
    }
    return newArr;
}

const array = generateArray();

console.log(
    `Array: ${array}\nSum of array elements: ${getArraySum(
    array
  )}\nMinimal number in array: ${getArrayMin(
    array
  )}\nArray of indexes of number 3: ${getIndexesArray(array)}`
);