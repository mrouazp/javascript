var arr = [-1, 43, 14, 2, 5];

var statCount = (function () {
    
    var sum = function(arr) {
        return arr.reduce(function (total, item) {
                return total + item;
        }, 0);
    };
    
    var negative = function(arr){
            var neg = arr.filter(function (item) {
                return item < 0;
            });
            return neg.length;
     };

    var even = function(arr) {
            var ev = arr.filter(function (item) {
                return item % 2 === 0;
            });
            return ev.length;
    };

    var average = function(arr) {
        return sum(arr) / arr.length;
    };
    
    return {
        negative: negative,
        even: even,
        average: average
    };
}());