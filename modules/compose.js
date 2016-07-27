require(
    [
        'grades_module'
    ],
    function (gradesCalc) {
        var grades = [1, 4, 6, 5, 11];
        console.log(gradesCalc.fails(grades));
        console.log(gradesCalc.average(grades));
    }
);