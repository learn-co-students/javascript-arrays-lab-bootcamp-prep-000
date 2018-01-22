const app = "I don't do much."
var kittens =
  ["Milo",
  "Otis",
  "Garfield"
  ]
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
  return kittens;
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

 function appendKitten(name) {
  var newArray = kittens.slice(0)
  newArray.push(name);
  return newArray;
}

function prependKitten(name) {
  var newArray = kittens.slice(0)
  newArray.unshift(name);
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1)
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray;
}
