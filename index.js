const app = "I don't do much."

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
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var nArray = kittens.slice(0); // using slice to clone kitten array w/o mutating
  nArray.push(name)
  return nArray
}

function prependKitten(name) {
  var newArray = [name, ...kittens]; // using the spread operator
  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice(0);
  newArray.pop()
  return newArray
}
// Remove first elemet,  non-destructive
function removeFirstKitten() {
  var newArray = kittens.slice(1); // clones array at starting point 1, removed first element
  return newArray
}

/*function removeFirstKitten() {
  var newArray = kittens; this does not work because it changes the original array
  newArray.shift()
  return newArray
}*/
