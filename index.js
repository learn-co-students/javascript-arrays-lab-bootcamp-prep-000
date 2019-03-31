var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
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
   var newkittens = [...kittens, name];
   return newkittens;
}

function prependKitten(name) {
  var newkittens = [name, ...kittens];
  return newkittens;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}