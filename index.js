var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten (name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten () {
  kittens.pop();
}

function destructivelyRemoveFirstKitten () {
  kittens.shift();
}

function appendKitten (name) {
  var newArray1 = [...kittens, name];
  return newArray1;
}

function prependKitten (name) {
  var newArray2 = [name, ...kittens];
  return newArray2;
}

function removeLastKitten () {
  var newArray3 = kittens.slice(0, kittens.length -1);
  return newArray3;
}

function removeFirstKitten () {
  var newArray4 = kittens.slice(1);
  return newArray4;
}