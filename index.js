const app = "I don't do much."

function destructivelyAppendKitten(name) {
kittens.push(name)
}

function destructivelyPrependKitten(name) {
kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
kittens.pop()
}

function destructivelyRemoveFirstKitten() {
kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
var kittens2 = [...kittens]
kittens2.pop()
return kittens2
}

function removeFirstKitten() {
var kittens2 = [...kittens]
kittens2.shift()
return kittens2
}
