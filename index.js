const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return name;
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
  return kittens
}

 function appendKitten(name) {
  [name, ...kittens,];
  return [...kittens, name];
}

function prependKitten(name) {
  [...kittens, name];
  return [name, ...kittens];
}

function removeLastKitten() {

  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  kittens.slice(1);
  var array = kittens.slice(1);
  return array;
}