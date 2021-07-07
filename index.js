var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name) {
  kittens.push (name);
  return kittens
}

kittens.push ("Panther")

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
  return kittens
}

kittens.unshift ("Panther")

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

kittens.pop()

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

kittens.shift()

function appendKitten (name) {
  return [... kittens, name]
}

[... kittens, "Panther"]

function prependKitten(name) {
  return [name, ...kittens]
}

["Panther", ... kittens]

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

kittens.slice(0, kittens,length - 1)

function removeFirstKitten() {
  return kittens.slice(1)
}

kittens.slice(1)