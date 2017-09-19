const app = "I don't do much."

//Notes and Objectives
//var kittens = ['Milo', 'Otis', 'Garfield']
//appending and removing 'Ralph'
//destructive vs non-destructive
//make sure i know these well
//make sad dead kitty happy and alive by passing tests

/*function destrucivelyAppendKitten(kittens) {
  kittens.push('Ralph')
  return kittens
}
*/

function kittens() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
}


function destructivelyAppendKitten(name) {
  kittens.push(name)
   return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}

function prependKitten(name) {
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten() {
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}

function removeFirstKitten() {
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}
