const app = "I don't do much."

// appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

// prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

// removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}

// removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
  return kittens
}

// appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name){
  return [...kittens, name]
}

// prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
  return [name, ...kittens]
}

// removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

// removes the first kitten from the kittens arrayand returns a new array, leaving the kittens array unchanged
function removeFirstKitten(){
  return kittens.slice(1)
}