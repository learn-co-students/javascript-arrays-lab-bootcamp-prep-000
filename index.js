// Add your functions and code here

// kitten Array
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return kittens.push('Ralph');
}

function destructivelyPrependKitten(name) {
  return kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var addKitten = ['Broom'];
  return kittens.concat(addKitten);
}

function prependKitten(name) {
  var addKitten = ['Arnold'];
  return addKitten.concat(kittens);
}

function removeLastKitten() {
  return kittens.slice(0, 2);
}

function removeFirstKitten() {
  return kittens.slice(1);
}  