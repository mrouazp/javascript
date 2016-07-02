$(document).ready(function() {
    //поиск - получаем jQuery коллекцию
    var $main_menu = $('ul.menu_main');
    
    //выводим весь внутренний текст для каждого элемента коллекции
    //см. функции .html(), .text(), .val()
    $main_menu.each(function() {
        console.log($(this).text());
    });
    
    //создаем и добавляем новый элемент для всех элементов коллекции
    //функции .append()/.appendTo(), .prepend()/.prependTo(), .after(), .before()
    $main_menu.prepend('<li class="menu_main__item">First</li>');
    
    //выведем jQuery-коллекцию
    console.log($main_menu);
    //элемент коллекции
    console.log($main_menu[1]);
    //создаем и добавляем новый элемент для второго элемента коллекции
    $('<li class="menu_main__item">Last</li>').appendTo($($main_menu[1]));
    
    //навигационные свойства
    // $elem.parent(), $elem.parents()
    // $elem.children(), $elem.find()
    var $liSecond = $($main_menu[0]).find('li:nth-child(2)');
    // $elem.siblings() $elem.prev() $elem.next()
    console.log($liSecond.siblings());
    
    //.css()
    //возможность повторного вызова функции для того же элемента - особенность jQuery
    var $liFirst = $liSecond.prev().css('color', 'white');
    $liFirst.css({'font-size' : '18px', 'background-color': 'red'});
    
    //события
    //обработчик на click
    $liFirst.click(function(){
        alert($(this).text());
    });
    
    //аналог .addEventListener
    $liSecond.on('click', secondClick);
    function secondClick() {
        alert('Click on second li');
    }
    //снятие обработчика, поставленного через .on
    $liSecond.off('click', secondClick);
    
    function dynamicClick() {
        alert('Dynamically added on ul');
    }
    //установка обработчика на элемент, который создан динамически
    //(в скрипте)
    $main_menu.on('click', 'li', dynamicClick);
    
    //обработчик, который сработает только один раз
    $liSecond.one('click', function() {
        alert('One time event listener');
    });
    
    //Удаление элемнтов $elem.remove(), $elem.empty()
    $($main_menu[1]).empty();
    
    //Скрытие элементов .hide()-.show() - .toggle()
    // .slideUp() - .slideDown() - .slideToggle()
    // .fadeOut() - .fideIn() - .fadeToggle()
    var $side_menu = $('.side_menu');
    $side_menu.find('li:first-child').click(function() {
        $('img').fadeToggle(1000);
    });
    
});
