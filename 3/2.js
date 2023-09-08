"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const num = Number.parseInt(prompt("Enter number"));
if (Number.isNaN(num)) {
    console.log("Number is incorrect!");
} else {
    alert(`Your salary after paying taxes is: ${payTaxes(num)}`);
}

function payTaxes(gross) {
    const tax = (gross / 100) * 13;
    return (gross - tax).toFixed(2);
}