"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const number1 = Number.parseInt(prompt("Enter first number"));
const number2 = Number.parseInt(prompt("Enter second number"));

console.log(
    `Sum of numbers ${number1} and ${number2} is ${sum(number1, number2)}`
);
console.log(
    `Private of numbers ${number1} and ${number2} is ${divide(number1, number2)}`
);
console.log(
    `Difference of numbers ${number1} and ${number2} is ${substract(
    number1,
    number2
  )}`
);
console.log(
    `Product of numbers ${number1} and ${number2} is ${multiply(
    number1,
    number2
  )}`
);

function sum(number1, number2) {
    return number1 + number2;
}

function divide(number1, number2) {
    if (number1 == number2) {
        return 1;
    } else {
        return Math.max(number1, number2) / Math.min(number1, number2);
    }
}

function substract(number1, number2) {
    if (number1 == number2) {
        return 0;
    } else {
        return Math.max(number1, number2) - Math.min(number1, number2);
    }
}

function multiply(number1, number2) {
    return number1 * number2;
}