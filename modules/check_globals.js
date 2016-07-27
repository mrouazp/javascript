console.log('From global scope: ');
console.log(grades);
console.log(fails);
console.log(average);

var grades = [4, 5];

function average() {
    return 'New average';
}

console.log('From global scope: ');
console.log(grades);
console.log(fails);
console.log(average);