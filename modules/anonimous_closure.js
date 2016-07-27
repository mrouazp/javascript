(function () {
    var arr = [-1, 43, 14, 2, 5];

    function negative() {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < 0)
                count++;
        }
        return count;
    }

    function even() {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0)
                count++;
        }
        return count;
    }

    function average() {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }

    console.log(negative());
    console.log(even());
    console.log(average());

}());