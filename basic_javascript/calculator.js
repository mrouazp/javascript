/* Simple calculator */

/* Получаем ввод от пользователя */
var numberOne = getNumber('first');
var sign = prompt('Enter operation sign');
var numberTwo = getNumber('second');

/* Выводим результат */
alert(calc(numberOne, numberTwo, sign));

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

/* Функция подсчитывающая результат, а так же выдающая ошибку при некорректном действии, которое не поддерживает калькулятор */
function calc(numberOne, numberTwo, sign) {
    switch (sign) {
        case "+":
            return numberOne + numberTwo;
        case "-":
            return numberOne - numberTwo;
        case "*":
            return numberOne * numberTwo;
        case "/":
            if (numberTwo == 0)
                return "Division by zero!";
            return numberOne / numberTwo;
        default:
            return "Operation " + sign + " is not supported";
    }
}
