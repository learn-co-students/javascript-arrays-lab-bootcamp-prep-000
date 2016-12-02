const app = "I don't do much."

var kittens = ['Milo,', 'Otis', 'Garfield'];
var catName = 'Walter';

function destructivelyAppendKitten(catName) {
  return kittens.push(catName);
}

function destructivelyPrependKitten(catName) {
  return kittens.unshift(catName);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(catName) {
  return [...kittens, catName];
}

function prependKitten(catName) {
  return [catName, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, 2);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
