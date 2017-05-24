const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newKittens = kittens.concat(name);
  return newKittens;
}

function prependKitten(name) {
  var n = [name];
  var newKittens = n.concat(kittens)
  return newKittens;
}

function removeLastKitten() {
  var newKittens = kittens.slice(0,2);
  return newKittens;
}

function removeFirstKitten() {
  var newKittens = kittens.slice(1,3);
  return newKittens;
}
