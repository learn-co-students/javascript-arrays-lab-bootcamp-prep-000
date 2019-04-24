var kittens = ['Milo', 'Otis', 'Garfield'] 

// Add name to end of array
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
// Add name to start of array
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
// Remove last value in array
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
// Remove first value in array
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
// Append value to array
function appendKitten(name) {
  var newArray = [name];
  return kittens.concat(newArray);
}
// Prepend value to array
function prependKitten(name) {
  var newArray = [name];
  return newArray.concat(kittens)
}
// Remove last value from array
function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}
// Remove first value from array
function removeFirstKitten() {
  return kittens.slice(1)
}
