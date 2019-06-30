var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var newArray = kittens.concat(name)
  return newArray
}

// function prependKitten(name) {
//   var newArray2 = kittens.unshift(name)
//   return newArray2
// }

// function removeLastKitten() {
//   var newArray3 = kittens.pop()
//   return newArray3
// }


var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here


function removeFirstKitten(name) {
  var newArray7 = kittens.slice(1)
  return newArray7
}
var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function removeLastKitten(name) {
  var missingKitty = kittens.pop(name)
  var V = kittens
  kittens.concat(missingKitty)
  return V
}