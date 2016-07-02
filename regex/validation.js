//id полей для валидации и правила валидации

/*ё и Ё для кириллицы указавается отдельно, так как
 * не входит в интервал символов от а до я (попробуйте
 * проверить слово с ё)*/

var validationRules = {
    name: /^[а-яёА-ЯЁ-]{2,}$/,
    surname: /^[а-яёА-ЯЁ-]{2,}$/,
    age: /^\d{1,3}$/,
    phone: /^\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
    gender: /(м|ж)/,
    address: /^\d{5} [\w\sа-яА-яёЁ,.-]{5,}$/
};

var form = document.getElementsByTagName('form')[0];
var error = document.getElementsByClassName('error')[0];

form.onsubmit = function(e) {
    e.preventDefault();
    if (!validateForm()) {
        return;
    }
    alert("Данные введены правильно, форма отправляется");
    this.submit();
};

function validateForm() {
    for (var field in validationRules) {
        if (!validationRules[field].test(form.elements[field].value)) {
            error.innerHTML = "Ошибка ввода, поле " + field;
            return false; 
        }
    }
    return true;
}
