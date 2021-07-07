var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
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
 var moreKittens = kittens.concat(name)
  return moreKittens
}
function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
}
function removeLastKitten() {
  var lessKittens = kittens.slice(0,-1)
  return lessKittens
}
function removeFirstKitten() {
  var lessKittens = kittens.slice(1)
  return lessKittens
}