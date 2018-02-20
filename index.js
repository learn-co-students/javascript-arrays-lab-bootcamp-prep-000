const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  return kittens.push(Ralph)
}

function destructivelyPrependKitten(Ralph) {
  return kittens.unshift(Ralph)
}

function destructivelyRemoveLastKitten(Garfield) {
  return kittens.pop(Garfield)
}

function destructivelyRemoveFirstKitten(Milo) {
  return kittens.shift(Milo)
}

function appendKitten(Ralph) {
  return [...kittens, Ralph]
}

function prependKitten(Ralph) {
  return [Ralph,...kittens]
}

function removeLastKitten(Garfield) {
  const fewerKittens = kittens.slice(0, 2)
  return fewerKittens
}

function removeFirstKitten(Milo) {
  const byeMilo = kittens.slice(1)
  return byeMilo
}