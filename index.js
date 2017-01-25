const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name)
{
    return  kittens.push(name)
}
function destructivelyPrependKitten(name)
{
    kittens.unshift(name)
    return kittens
}
function destructivelyRemoveLastKitten(name) {
    return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name){
  var newArray = [...kittens, name]
  return newArray
}
function prependKitten(name) {
  var newArray = [name, ...kittens]
  return newArray
}
function removeLastKitten() {
  var newArray = kittens.slice (0, kittens.length - 1)
  return newArray
}
function removeFirstKitten() {
  return kittens.slice(1)
}
