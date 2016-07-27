 var grades = [1, 4, 6, 5, 11];

(function () {
    var localGrades = [11, 4, 12, 5, 11];

    function fails(grades) {
        var fails = grades.filter(function (item) {
            return item < 7;
        });
        return fails.length;
    }

    function average(grades) {
        var sum = grades.reduce(function (total, item) {
            return total + item;
        }, 0);
        return sum / grades.length;
    }
    
    console.log(fails(grades));
    console.log(average(grades));
    
    console.log(fails(localGrades));
    console.log(average(localGrades));
}());