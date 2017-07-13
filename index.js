const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
kittens.push(name)
return kittens
}
function destructivelyPrependKitten(name) {
kittens.unshift(name)
return kittens
}
function destructivelyRemoveLastKitten() {
kittens.pop()
}
function destructivelyRemoveFirstKitten() {
kittens.shift([0])
return kittens
}
function appendKitten(name) {
var newkittens = [...kittens, name]
  return newkittens
}
function prependKitten(name) {
var newerkittens = [name, ...kittens]
  return newerkittens
}
function removeLastKitten() {
var lesskittens = kittens.slice(0, kittens.length - 1)
  return lesskittens
}
function removeFirstKitten() {
var lesserkittens = kittens.slice(1)
  return lesserkittens
}
