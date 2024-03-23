var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];

// sort by value
let y = items.sort(function (a, b) {
  return a.value - b.value;
});

// sort by name
let z = items.sort((a, b) => {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log("z", z);
console.log(y);
let sr = ["elephant", "dog", "cat", "bee", "ant"];
let sortARR = sr.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

console.log("sort Strings", sortARR);
let z1 = items.sort((a, b) => a.value - b.value);

console.log("sort numbers", z1);
