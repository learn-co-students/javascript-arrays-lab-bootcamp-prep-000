//define an array kittens with the cats "Milo", "Otis", "Garfield"
var kittens = ["Milo", "Otis", "Garfield"];

//define a function which destructively appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

//define a function that destructively prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

//define a function that destructively removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

//define a function that destructively remoces the first kitten from the kittens array
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

//define a function that appends a kitten to the kittens array and returns a new array, leaving kittens untouched
function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

//define a function that prepends a kitten to the kittens array and returns a new array, leaving kittens untouched
function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

//define a function that removes the last kitten in the kittens array and returns a new array, leaving kittens untouched
function removeLastKitten(){
  var newKittens = kittens.slice(0, kittens.length - 1)
  return newKittens
}

//define a function that removes the first kitten from the kittens array and returns a new array, leaving kittens untouched
function removeFirstKitten(){
  var newKittens = kittens.slice(1)
  return newKittens
}
