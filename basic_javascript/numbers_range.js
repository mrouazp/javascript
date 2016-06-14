/* Range of numbers */

/* Получаем ввод от пользователя */
var start = getNumber('начало');
var finish = getNumber('конец');

if (start > finish) {
    var tmp = start;
    start = finish;
    finish = tmp;
}

/* Выводим результат */
calc(start, finish);


/* Функция, которая получает числа от пользователя. Запускает цикл до тех пор, пока пользователь не введет корректное значение */
function getNumber(name) {
    var number;
    do {
        number = prompt('Введите ' + name + ' диапазона чисел (целое число)');
        number = checkNumber(number);
    }while(number === false);
    return number;
}

/* Функция проверяет введенное число и выводит сообщение об ошибке, если ввод не число */
function checkNumber(number) {
    if (isNaN(parseInt(number))) {
        alert('Введенное значение не число, повторите ввод');
        return false;
    }
    return parseInt(number);
}

/* Функция для проверки делимости чисел на 3 и 5 */
function calc(start, finish) {
    var noNumbers = true;
    var div3, div5;
    
    for (var i = start; i <= finish; i++) {
        div3 = i % 3;
        div5 = i % 5;
        if (div3 === 0 && div5 === 0)
            alert("Число " + i + " делится на 3 и на 5");
        else if (div3 === 0)
            alert("Число " + i + " делится на 3");
        else if (div5 === 0)
            alert("Число " + i + " делится на 5");
        if ( noNumbers && (div3 === 0 || div5 === 0) )
            noNumbers = false;
    }
    
    /* Если в результате проверки диапазона не нашли ни одного числа, выводим сообщение об этом */
    if (noNumbers)
        alert("В диапазоне чисел от " + start + " до " + finish + " ни одно число не делится на 3 или 5");
}
