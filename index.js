const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  const kittens2 = kittens.concat(name);
  return kittens2
}

function prependKitten(name) {
  const kittens2 = [name, ...kittens]
  return kittens2
}

function removeLastKitten(name) {
  const kittens2 = kittens.slice(0,-1)
  return kittens2
}

function removeFirstKitten(name) {
  const kittens2 = kittens.slice(1,kittens.length)
  return kittens2
}
