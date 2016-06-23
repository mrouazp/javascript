/*----------------------------------------
1. Установка обработчиков событий
-----------------------------------------*/

var buttons = document.getElementsByTagName('button');
buttons[1].onclick = function(e) {
    alert("From function");
}
//не добавили, а переопределили обработчик на click
buttons[1].onclick = function(e) {
    alert("From function 2");
}

//добавили сразу 2 обработчика на третюю кнопку
buttons[2].addEventListener("click", btnClick);
buttons[2].addEventListener("click", btnClick2);
function btnClick(e) {
    e.stopImmediatePropagation();
    alert("From addEventListener");
}
function btnClick2(e) {
    e.stopPropagation();
    alert("From addEventListener 2");
}

//четвертая кнопка удаляет обработчики со второй и третьей 
buttons[3].onclick = function() {
    //обнуление обработчика событий
    buttons[1].onclick = null;

    buttons[2].removeEventListener("click", btnClick);
};


/*----------------------------------------
2. Всплытие событий
-----------------------------------------*/

var buttons_wrapper = document.querySelector('.buttons_wrapper');
var section_one = buttons_wrapper.parentElement;

buttons_wrapper.addEventListener('click', eventLog);
section_one.addEventListener('click', eventLog);

function eventLog(e) {
    console.log("Тип события " + e.type + " текущий элемент: " + e.currentTarget.tagName + " цель события: " + e.target.tagName);
    e.target.style.backgroundColor = "red";
}


/*----------------------------------------
3. preventDefault
-----------------------------------------*/

//Два варианта отмены действия браузера по умолчанию
//1
/*document.querySelector('a[href*="google"]').onclick = function(e) {
    e.preventDefault();
};*/
//2
document.querySelector('a[href*="google"]').onclick = function() {
    return false;
};

/*----------------------------------------
4. Другие события 
-----------------------------------------*/
 
//Мышь
var mouse_test = document.querySelector('.mouse_test');
mouse_test.addEventListener("mousedown", mouseLog);
mouse_test.addEventListener("mouseup", mouseLog);
mouse_test.addEventListener("click", mouseLog);
mouse_test.addEventListener("dblclick", mouseLog);
mouse_test.addEventListener("contextmenu", mouseLog);
mouse_test.addEventListener("mouseover", mouseLog);
mouse_test.addEventListener("mouseout", mouseLog);

var mouse_run = document.querySelector('.mouse_run');
mouse_run.addEventListener("mousemove", mouseLog);

function mouseLog(e) {
   console.log("Событие: " + e.type + " координаты по экрану " + e.screenX + ":" + e.screenY + " кнопка: " + e.which); 
}

//Клавиатура
var keyboard_test = document.querySelector('.keyboard_test');
keyboard_test.addEventListener("keydown", keyLog);
keyboard_test.addEventListener("keyup", keyLog);
keyboard_test.addEventListener("keypress", keyLog);

function keyLog(e) {
   console.log("Событие: " + e.type + (e.keyCode?  " код клавиши: " + e.keyCode : "") + (e.charCode? " символ: " + String.fromCharCode(e.charCode) : "")); 
}

//Форма
var form = document.forms.questions;

form.elements.name.oninput = function(e) {
    this.value = this.value.toUpperCase();
    console.log("Событие: " + e.type + " " + this.value);
};

form.elements.name.onchange = function(e) {
    console.log("Событие: " + e.type + " " + this.value);
};

form.elements.updates.onchange = function(e) {
    if (this.checked)
        form.elements.news.checked = true;
};

form.onsubmit = function(e) {
    e.preventDefault();
    var errors = document.querySelector('p.errors');
    if(form.elements.name.value.length < 2) {
        errors.innerHTML = "Your name is too short";
        return;
    }
    if(form.elements.surname.value.length < 2) {
        errors.innerHTML = "Your surname is too short";
        return;
    }
    this.submit();
};