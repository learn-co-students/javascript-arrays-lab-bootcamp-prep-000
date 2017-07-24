//const app = "I don't do much."
//kittens = ["Milo", "Otis", "Garfield"];

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
  let arr = kittens.slice();
  arr.push(name);
  return arr;
}

function prependKitten(name) {
  let arr = kittens.slice();
  arr.unshift(name);
  return arr;
}

function removeLastKitten() {
  let arr = kittens.slice();
  arr.pop();
  return arr;
}

function removeFirstKitten() {
  let arr = kittens.slice();
  arr.shift();
  return arr;
}
