"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

function cubeNumber(number) {
    return number ** 3;
}

const number = Number.parseInt(prompt("Enter number"));
alert(`Cube of number ${number} is ${cubeNumber(number)}`);
console.log(`Cube of number ${number} is ${cubeNumber(number)}`);