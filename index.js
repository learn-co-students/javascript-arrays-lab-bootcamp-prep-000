var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newArray = kittens.concat(name);
  return newArray;
}

function prependKitten(name) {
  var newArray = [name].concat(kittens);
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length-1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1, );
  return newArray;
}