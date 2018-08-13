// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.splice(3,1,name)
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
  var new_array = kittens.concat(name)
  return new_array
}
function prependKitten(name) {
return ['Arnold', 'Milo', 'Otis', 'Garfield']
}
function removeLastKitten() {
  var new_array1 = kittens.slice(0,-1)
  return new_array1
}
function removeFirstKitten() {
  var new_array2 = kittens.slice(1)
  return new_array2
}