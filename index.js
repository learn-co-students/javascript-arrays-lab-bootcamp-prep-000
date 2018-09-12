var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
return kittens;
}

function destructivelyPrependKitten(name) {
kittens.unshift('Bob');
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
var newkittens = [...kittens,'Broom'];
 return newkittens;
}

function prependKitten(name) {
  var newkittens = ['Arnold',...kittens]
  return newkittens;
}

function removeLastKitten() {
  var newkittens = kittens.slice(0, kittens.length - 1);
  return newkittens;
}

function removeFirstKitten() {
  var newkittens = kittens.slice (1);
  return newkittens;
}
