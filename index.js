var kittens = [] //define your array here

// Add your functions and code here

//Mutators: pop, push, shift, unshift
//Non-Mutators: slice, concat, splice

var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name){
  //appends a kitten to the end of the kittens array
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
//prepends a kitten to the beginningof the kittens array
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  //removes the last kitten from the kittens array
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten() {
  //removes the First kitten from the kittens array
  kittens.shift(name)
}

function appendKitten(name) {
  //appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  var kittensAppended = [...kittens,name]
  return kittensAppended
}

function prependKitten(name) {
  //prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
  var kittensPrepended = [name,...kittens]
  return kittensPrepended
}

function removeLastKitten() {
  //removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
  var kittensSliced = kittens.slice(0,kittens.length-1)
  return kittensSliced
}

function removeFirstKitten() {
  //removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
  var kittensMinusFirst = kittens.slice(1)
  return kittensMinusFirst
}