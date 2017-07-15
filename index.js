const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift(name)
}

function appendKitten(name) {
  var moreKittens = [...kittens, name];
  return moreKittens
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens];
  return  moreKittens
}

function removeLastKitten() {
  var moreKittens = kittens.slice(0, kittens.length - 1);
  return moreKittens
}

function removeFirstKitten() {
  var moreKittens = kittens.slice(1);
  return moreKittens
}
