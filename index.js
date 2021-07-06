//define kittens array 
var kittens = [
  "Milo",
  "Otis",
  "Garfield"
] 

// distructively add a kitten to the end of kittens array
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

// destructively prepend a kitten to the beggining of the array
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

// destructively remove the last kitten from the array
function destructivelyRemoveLastKitten() {
  return kittens.pop(0,kittens.length-1)
}

//destructively remove the first kitten from the array
function destructivelyRemoveFirstKitten() {
  return kittens.shift(1)
}

//apend a kitten to the kittens array and returns a new array leaving the kittens array unchanged
function appendKitten(name) {
  return kittens.concat(name)
}

//prepend a kitten in the same manner
function prependKitten(name) {
  return [name].concat(kittens)
}

//remove the last kitten in the kittens array and return a new array
function removeLastKitten() {
  return kittens.slice(0,kittens.length-1)
}

//remove the first kitten from the array and return a new array
function removeFirstKitten() {
  return kittens.slice(1)
}