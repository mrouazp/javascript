var str = "Lorem ipsum dolor sit amet, consectetur adipiscing\n\
 elit. Duis venenatis mauris vel aliquam cursus.\n\
 Donec sodales ullamcorper ligula quis placerat. \n\
Etiam quis cursus felis. Integer at nibh sollicitudin,\n\
 ullamcorper ante ut, placerat elit. Phasellus nibh arcu,\n\
 consequat eu semper vitae, aliquet quis felis.";

var pattern = /lorem/i;
var patternG = /in/ig;
var patternSplit = /in/i;

//только первое вхождение pattern
console.log(str.search(pattern));
console.log(pattern.test(str));

console.log("Работа str.match(pattern) без флага /g");
var result = str.match(pattern);
console.log(result);

//все вхождения pattern
var resultG = str.match(patternG);
console.log("Работа str.match(pattern) с флагом /g");
console.log(resultG);

console.log("Работа regexp.exec(str)");
while(resultExec = patternG.exec(str))
    console.log(resultExec);
console.log("Конец поиска regexp.exec(str)");

//замена подстроки
document.write("Результат работы замены подстроки: " + str.replace(patternG, "REPLACED"));
//разбивка строки по подстроке
console.log(str.split(patternG));