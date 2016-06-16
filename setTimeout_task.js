// Задача про наполнение массива значениями, равными текущему счетчику цикла в setTimeout

//1 Сама задача

var arr = [];

for(var i = 0; i < 3; i++) {
	setTimeout(function() {
		arr.push(i);
	}, 100);
}
						 
//выведет пустой массив, который не успеет заполниться значениями
console.log('Вывод массива без timeout', arr);

//выведет массив, заполненный последним значением счетчика цикла
setTimeout(function() {
	console.log('Вывод массива с задержкой 1 секунда', arr);
}, 1000);

//2 Решение с функцией-оберткой

var arr2 = [];

for(var i = 0; i < 3; i++) {
	envelope(i);
}

function envelope(i) {
	setTimeout(function() {
		arr2.push(i);
	}, 100);
}

setTimeout(function() {
	console.log('Вывод массива с задержкой 1 секунда - функция-обертка', arr2);
}, 1000);

//3 Решение с анонимной функцией

var arr3 = [];

for(var i = 0; i < 3; i++) {
	(function(i) {
		setTimeout(function() {
			arr3.push(i);
		}, 100);
	})(i);	
}

setTimeout(function() {
	console.log('Вывод массива с задержкой 1 секунда - анонимная функция', arr3);
}, 1000);
