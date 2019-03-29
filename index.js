var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var newArr = [...kittens, name];
  return newArr;
}

function prependKitten(name) {
  var newArr = [name, ...kittens];
  return newArr;
}

function removeLastKitten() {
  var newArr = kittens.slice(0, kittens.length -1);
  return newArr;
}

function removeFirstKitten() {
  var newArr = kittens.slice(1);
  return newArr;
}
