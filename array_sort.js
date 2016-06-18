var one = {name: "Andrey", surname: "ivanov", height: 180};
var two = {name: "Ivan", surname: "Ivanov", height: 180};
var three = {surname: "Sidorov", height: 190};
var four = {surname: "Kalinin", height: 160};
var five = {surname: "Sidorchuk", height: 190};

var arr = [one, two, three, four, five];


console.log(arr.sort(sorting));

function sorting(a, b) {
  if (a.height !== b.height)
    return a.height - b.height;
  var surnameA = a.surname.toLowerCase();
  var surnameB = b.surname.toLowerCase();
  if (surnameA > surnameB)
    return 1;
  else if (surnameA < surnameB)
    return -1;
  else
    return 0;
}
