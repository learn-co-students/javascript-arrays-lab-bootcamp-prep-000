const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

// appends a kitten to the end of the kittens array:
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

// prepends a kitten to the beginning of the kittens array:
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

//removes the last kitten from the kittens array:
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

//removes the First kitten from the kittens array:
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

var kittens = ["Milo", "Otis", "Garfield"]

//appends a kitten to the kitten array and returns a new array, leaving the kittens array unchanged:
function appendKitten(name){
  return [...kittens, name]
}

//prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:
function prependKitten(name){
  return [name, ...kittens]
}

//removes the last kitten from the kittens array and returns a new array, leaving the kittens array unchanged:
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

//removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged:
function removeFirstKitten(){
  return kittens.slice(1)
}
