const app = "I don't do much."
var kittens =[
  "milo",
  "Otis",
  "Garfield"
];

function destructivelyAppendKitten(name) {
  kittens.push(name);
};

function destructivelyAppendKitten(name) {
  kittens.unshift(name);
};

function destructivelyRemoveLastKitten() {
  kittens.pop();
};

function destructivelyRemoveFirstKitten() {
  kittens.shift();
};

function appendKitten(name) {
  var newArray = [
    kittens[0],
    kittens[1],
    kittens[2],
    name
  ];
  return newArray;
};

function prependKitten(name) {
  var newArray = [
    name,
    kittens[0],
    kittens[1],
    kittens[2],
  ];
  return newArray;
};

removeLastKitten() {
  var newArray = [
    kittens.pop();
  ];
  return newArray;
};

removeFirstKitten() {
  var newArray = [
    kittens.shift();
  ];
  return newArray;
};
