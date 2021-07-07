var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
  return kittens
  }
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
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
  var moreKittens = [...kittens, name]
  return moreKittens
}
function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
}
function removeLastKitten() {
  var lessKittens = kittens.slice(0, kittens.length - 1)
  return lessKittens
}
function removeFirstKitten() {
  var lessKittens = kittens.slice(1)
  return lessKittens
}
