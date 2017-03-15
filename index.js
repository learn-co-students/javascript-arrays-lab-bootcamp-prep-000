const app = "I don't do much."
var kittens =["Milo", "Otis", "Garfield"];
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
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
var foo = [...kittens, name]
return foo
}
function prependKitten(name) {
  var foo = [name, ...kittens]
  return foo
}
function removeLastKitten() {
  var foo = kittens.slice(0, kittens.length -1)
  return foo
}
function removeFirstKitten() {
  var foo = kittens.slice(1)
  return foo
}
