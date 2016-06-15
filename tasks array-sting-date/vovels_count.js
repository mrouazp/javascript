var str = "рАбота с брАузЕром.";
alert(counter(str));

function counter(str) {
    var vovels = "аеёиоуыэюя";
    var count = 0;
    for(var i=0; i < str.length; i++) {
        var symbol = str[i].toLowerCase();
        if(vovels.indexOf(symbol) > -1)
            count++;
    }
    return count;
}
