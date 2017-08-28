const app = "I don't do much."
//start
var kittens=["Milo", "Otis", "Garfield"];

//Destructively Append Kitten 'Ralph'
function destructivelyAppendKitten(name){
  kittens.push(name)
}

//Destructively Prepend Kitten 'Bob'
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

//Destructively Remove Last Kitten
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
}

//Destructively Remove First Kitten
function destructivelyRemoveFirstKitten(name){
  kittens.shift(name)
}

//Append Kitten to end of Array and Return Array unmodified
function appendKitten(name){
  var morekittens = [...kittens, name]
  return morekittens

}
//Prepend Kitten to Beginning of Array
function prependKitten(name){
  var evenmorekittens = [name,...kittens]
  return evenmorekittens
}

//Remove first kitten and return original
function removeFirstKitten(name){
  var fewerkittens = kittens.slice(1)
  return fewerkittens
}

//Remove Last kitten and return original
function removeLastKitten(name){
  var lastkitten = kittens.slice(0, kittens.length-1)
  return lastkitten
}
