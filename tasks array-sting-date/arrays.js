var arr = [],
arr2 = [],
min = -100,
max = 100,
number = 10;

/* Заполняем массив случайными значениями в заданном интервале */
for (var i = 0; i < number; i++) {
    arr.push(generate(min, max));
}

/* Фильтруем массив и заполняем отфильтрованными значениями второй */
for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
    if (arr[i] > 100) {
        arr2.push(arr[i]);
    }
}

console.log(arr);
console.log(arr2);

function generate(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
