const app = "I don't do much."
var first, kitt, kit, last
function kittens() {
  kittens = ["Milo", "Otis", "Garfield"];
}
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  kitt = [...kittens, name]
  return kitt
}

function prependKitten(name) {
  kit = [name,...kittens]
  return kit
}

function removeLastKitten() {
  last = kittens.slice(0,2)
  return last
}

function removeFirstKitten() {
  first = kittens.slice(1,3)
  return first
}
