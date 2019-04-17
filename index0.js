var kittens = ["Milo", "Otis", "Garfield"]

//destruvielyAppendKitten(name) appends a kitten to the end of the ktitens array 
function destruvielyAppendKitten(name) {
  return kittens.push(name)
}

//destructivelyPrependKitten(name) prepends a kitten to the beginning of the ktitens array
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

//destructivelyRemoveLastKitten() rmeoves the last ktitten from the kittens array
function destructivelyRemoveLastKitten() {
  return kittens.pop() 
}

//destructivelyRemoveFirstKitten() remove the first kitten from the kitten array
function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

//appendKitten(name) appends a kitten to the kittens array and returns a new array, non-mutated
function appendKitten(name) {
  return [...kittens, name]
}

//prependKitten(name) prepend a kitten to the kittens array and returns a new array, non-mutated
function prependKitten(name) {
  return[name, ...kittens]
}

//removeLastKitten() removes the last kitten inthe kittens array and returns a new array, non-mutated
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1) //starting from the first index, to the end of the array, then removing the last one
}

//removeFirstKitten removes the first kitten in the ktiten array and returns a new array, non-mutated
function removeFirstKitten() {
  return kittens.slice(1)
}