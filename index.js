const app = "I don't do much."

var kittens = [
  'Milo',
  'Otis',
  'Garfield'
  ];
  
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name);
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten(name) {
  var minusLastKit = kittens.slice(0, kittens.length - 1);
  return minusLastKit;
}

function removeFirstKitten(name) {
  var newKittens = kittens.slice(1);
  return newKittens;
}


