var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(ralph = "Ralph") {
  kittens.push(ralph)
}
function destructivelyPrependKitten(ralph = "Ralph") {
  kittens.unshift(ralph)
}function destructivelyRemoveLastKitten(ralph = "Ralph") {
  kittens.pop()
}
function destructivelyRemoveFirstKitten(ralph = "Ralph") {
  kittens.shift()
}
function appendKitten(ralph = "Ralph") {
  return [...kittens, ralph]
}
function prependKitten(ralph = "Ralph") {
  return [ralph, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, 2)
}
function removeFirstKitten() {
  return kittens.slice(1, 3)
}
