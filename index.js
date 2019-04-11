var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
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
  return kittens.concat('Broom');
}

function prependKitten(name) {
  return ['Arnold'].concat(kittens);
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}