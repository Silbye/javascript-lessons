"use strict";

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

const positive = Number.parseInt(prompt("Enter a positive number"));
const negative = Number.parseInt(prompt("Enter a negative number"));
if ((positive > 0) & (negative < 0)) {
    alert("All values are correct!");
} else {
    console.log("One or more values is incorrect!");
}