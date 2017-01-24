const app = "I don't do much."

Array = [ "Milo", "Otis", "Garfield" ]

var kittens = [ "Milo", "Otis", "Garfield" ]
console.log(kittens)
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  var kittens1 = [...kittens, name]
  return kittens1
}

function prependKitten(name) {
  var kittens2 = [name, ...kittens ];
  return kittens2
}

function removeLastKitten() {
  var kittens1 = kittens.slice(0, kittens.length-1);
  return kittens1
}

function removeFirstKitten() {
  var kittens1 = kittens.slice(1)
  return kittens1
}
