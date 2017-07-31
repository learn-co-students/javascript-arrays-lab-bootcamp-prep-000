const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
 kittens.push(name)

}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
function appendKitten(name) {
var result = [...kittens]
result.push(name)
return result
}
function prependKitten(name) {
  var result = [...kittens]
  result.unshift(name)
  return result
}
function removeLastKitten() {
  var result = [...kittens]
  result.pop()
  return result
}
function removeFirstKitten() {
  var result = [...kittens]
  result.shift()
  return result
}
