var gradesCalc = (function() {
    
    return {
        
        fails: function (grades) {
            var fails = grades.filter(function (item) {
                return item < 7;
            });
            return fails.length;
        },

        average: function(grades) {
            var sum = grades.reduce(function (total, item) {
                return total + item;
            }, 0);
            return sum / grades.length;
        }
 
    };
}());

var grades = [1, 4, 6, 5, 11];
console.log(gradesCalc.fails(grades));
console.log(gradesCalc.average(grades));