var kittens = ["Milo", "Otis", "Garfield"] //define your array here
function destructivelyAppendKitten(kitten) {
  kittens.push(kitten);
}
function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten);
}

function destructivelyRemoveLastKitten(kitten) {
  kittens.pop(kitten);
}

function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten)
}

function appendKitten(name) {
  var kitten2 = [name]
  var kittens3 = kittens.concat(kitten2);
  return kittens3
}

function prependKitten(name) {
  var kitten2 = [name]
  var kittens3 = kitten2.concat(kittens)
  return kittens3
}

function removeLastKitten() {
  var kitten2 = kittens.slice(0,2)
  return kitten2
}
// Add your functions and code here
function removeFirstKitten() {
  var kitten2 = kittens.slice(1)
  return kitten2
}
