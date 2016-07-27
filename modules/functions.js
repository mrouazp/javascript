var grades = [1, 4, 6, 5, 11];

function fails() {
    var fails = grades.filter(function(item) {
        return item < 7;
    });
    return fails.length;
}

function average() {
    var sum = grades.reduce(function(total, item) {
        return total + item;
    }, 0);
    return sum / grades.length;
}

console.log(fails());
console.log(average());