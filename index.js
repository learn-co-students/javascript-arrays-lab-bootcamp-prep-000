var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
}

function appendKitten(name) {
 var toReturn = new Array()
 toReturn.push(...kittens)
 toReturn.push(name)
 return toReturn
}

function prependKitten(name) {
  var toReturn = new Array() 
  toReturn.push(name)
  toReturn.push(...kittens)
  return toReturn
}

function removeLastKitten(name) {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name) {
  return kittens.slice(1, kittens.length)
}