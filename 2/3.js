"use strict";

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

let dayNumber = parseInt(prompt("Enter this day's number"));
if (dayNumber >= 1 & dayNumber < 32) {
    if (dayNumber < 11) {
        alert('Number ' + dayNumber + ' falls into ' + 1 + 'st decade of the month');
    } else if (dayNumber > 10 & dayNumber < 21) {
        alert('Number ' + dayNumber + ' falls into ' + 2 + 'nd decade of the month');
    } else if (dayNumber > 20 & dayNumber < 31) {
        alert('Number ' + dayNumber + ' falls into ' + 3 + 'rd decade of the month');
    } else if (dayNumber > 30) {
        alert('Number ' + dayNumber + ' falls into ' + 4 + 'th decade of the month');
    }
} else {
    alert('Number is incorrect!');
}