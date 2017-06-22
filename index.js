const app = "I don't do much."
let kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  let newArr = [...kittens, name];
  return newArr;
}

function prependKitten(name) {
  let newArr = [name, ...kittens];
  return newArr;
}

function removeLastKitten() {
  let newArr = kittens.slice(0, kittens.length - 1);
  return newArr;
}

function removeFirstKitten() {
  let newArr = kittens.slice(1);
  return newArr;
}
