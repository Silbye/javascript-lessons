"use strict";

/*
Дан массив arr (ниже).
Необходимо внести такие изменения в массив, лежащий в const arr, чтобы
его значения после изменений стали: 
[1, 2, 100, 6, 7]
*/

// Здесь пишем решение, данный комментарий необходимо стереть.
const arr = [1, 2, 3, 4, 5, 6, 7];

function shrinkArray(array) {
    array.splice(2, 3, 100);
    return array;
}

console.log(`Base array is: ${arr}\nModified array is: ${shrinkArray(arr)}`);