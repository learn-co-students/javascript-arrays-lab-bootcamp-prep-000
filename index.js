var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(string) {
  return kittens.push(string)
}
function destructivelyPrependKitten(string) {
  return kittens.unshift(string)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop() 
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(string) {
  return kittens.concat(string)
}
function prependKitten(string) {
  return [string, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten() {
  return kittens.slice(1)
}
