const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return
}

function appendKitten(name) {
  var kittensb = [...kittens, name]
  return kittensb
}

function prependKitten(name) {
  var kittensc = [name, ...kittens]
  return kittensc
}

function removeLastKitten() {
  var kittensd = kittens.slice(0, kittens.length - 1)
  return kittensd
}

function removeFirstKitten() {
  var kittense = kittens.slice(1, kittens.length)
  return kittense
}
