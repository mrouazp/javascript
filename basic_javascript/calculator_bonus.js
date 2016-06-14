/* Simple calculator */

/* Получаем ввод от пользователя */
var numberOne = getNumber('first');
var sign = prompt('Enter operation sign');
var numberTwo = getNumber('second');

/* Получаем функцию, которая расчитает результат */
var result = calc(numberOne, numberTwo, sign);
/* Запускаем полученную функцию */
alert(result());


/* Функция, которая получает числа от пользователя. Запускает цикл до тех пор, пока пользователь не введет корректное значение */
function getNumber(name) {
    var number;
    do {
        number = prompt('Enter ' + name + ' number');
        number = checkNumber(number);
    }while(number === false);
    return number;
}

/* Функция проверяет введенное число и выводит сообщение об ошибке, если ввод не число */
function checkNumber(number) {
    if (isNaN(parseFloat(number))) {
        alert('Your value is not a number, please input correct value');
        return false;
    }
    return parseFloat(number);
}

/* Функция, которая возвращает функциональное выражение для расчета результата */
function calc(numberOne, numberTwo, sign) {
    var func;
    
    switch (sign) {
        case "+":
            func = function() {return numberOne + numberTwo;}; break;
        case "-":
            func = function() {return numberOne - numberTwo;}; break;
        case "*":
            func = function() {return numberOne * numberTwo;}; break;
        case "/":
            if (numberTwo == 0)
                func = function() {return "Division by zero!";};
            else
                func = function() {return numberOne / numberTwo;}; 
            break;
        default:
            func = function() {return "Operation " + sign + " is not supported";}; break;
    }
    return func;
}
