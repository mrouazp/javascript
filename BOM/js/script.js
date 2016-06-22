//Вывод свойств объекта window на страницу, каждое с новой строчки
var properties = '';
for (var property in window) {
    properties += '<p>' + property + ': ' + window[property] + '</p>';
}
document.write(properties);

//Открыть в новом окне http://www.w3schools.com/, размер окна 200x200
var w3schools = window.open("http://www.w3schools.com/", "_blank", "height=200, width=200");

//Изменить размер открытого окна на 500х500
w3schools.resizeTo(500, 500);

//Прокрутить текущее окно на самый верх
window.scrollTo(0, 0);

//Вывести информацию об операционной системе и браузере пользователя
alert(window.navigator.userAgent);

//Закрыть окно с W3schools 
w3schools.close();