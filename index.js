const app = "I don't do much."

var kittens = ['fred', 'alice', 'shelby']
function destructivelyAppendKitten (kitten) {
  kittens.push(kitten)
  return kittens
}
destructivelyAppendKitten(Bill)

function destructivelyPrependKitten (kitten) {
  kittens.unshift(kitten)
  return kittens
}
destructivelyPrependKitten(Bill)

function destructivelyRemoveLastKitten (kitten) {
  kittens.pop(kitten)
  return kittens
}
destructivelyRemoveLastKitten(shelby)

function destructivelyRemoveFirstKitten (kitten) {
  kittens.shift(kitten)
  return kittens
}
destructivelyRemoveFirstKitten(fred)

function appendKitten (kitten) {
return [...kittens, kitten]
  //moreKittens = [...kittens, kitten]
  //return moreKittens
}
appendKitten(gretchen)

function prependKitten (kitten) {
  return [kitten, ...kittens]
}
prependKitten(arnold)

function removeLastKitten () {
  return kittens.slice(0,2)
}
removeLastKitten()

function removeFirstKitten () {
  return kittens.slice(1)
}
removeFirstKitten()
