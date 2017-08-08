const app = "I don't do much."
//var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(kitten) {
  kittens.push(kitten)
}

function destructivelyPrependKitten(kitten) {
  kittens.unshift(kitten)
}

function destructivelyRemoveLastKitten(kitten) {
  kittens.pop(kitten)
}

function destructivelyRemoveFirstKitten(kitten) {
  kittens.shift(kitten)
}

function appendKitten(kitten) {
  var kittensNonDestructive = kittens.slice()
  kittensNonDestructive.push(kitten)
  return(kittensNonDestructive)
}

function prependKitten(kitten) {
  var kittensNonDestructive = kittens.slice()
  kittensNonDestructive.unshift(kitten)
  return(kittensNonDestructive)
}

function removeLastKitten(kitten) {
  var kittensNonDestructive = kittens.slice()
  kittensNonDestructive.pop(kitten)
  return(kittensNonDestructive)
}

function removeFirstKitten(kitten) {
  var kittensNonDestructive = kittens.slice()
  kittensNonDestructive.shift(kitten)
  return(kittensNonDestructive)
}
