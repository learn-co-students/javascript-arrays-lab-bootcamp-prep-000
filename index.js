var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(kitten) {
  return kittens.push(kitten);
}

function destructivelyPrependKitten(kitten) {
  return kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(kitten) {
  var newKittens = [...kittens, kitten];
  return newKittens;
}

function prependKitten(kitten) {
  var newKittens = [kitten, ...kittens];
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0,-1);
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
}