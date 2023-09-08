"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const num1 = Number.parseFloat(prompt("Enter first number"));
const num2 = Number.parseFloat(prompt("Enter second number"));
const num3 = Number.parseFloat(prompt("Enter third number"));

function findmax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

alert(
    `Maximum value among numbers ${num1}, ${num2}, ${num3} is ${findmax(
    num1,
    num2,
    num3
  )}`
);