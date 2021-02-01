var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten() {
  kittens.push("Ralph")
}

function destructivelyPrependKitten() {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

var newKitten = "Broom";
function appendKitten(newKitten) {
  var newArray = [...kittens, newKitten];
  return newArray
}

var newkitten = "Arnold";
function prependKitten(newkitten) {
  var newArray =[newkitten,...kittens];
  return newArray
}

function removeLastKitten() {
  var newArray = kittens.slice(0,kittens.length -1)
  return newArray
}

function removeFirstKitten() {
  var newArray = kittens.slice(1)
  return newArray
}