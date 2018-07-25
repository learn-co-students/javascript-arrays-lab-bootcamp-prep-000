var kitten = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
   kittens.push("Ralph")
  }
  
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
   var newArray = kittens.slice();
   newArray.push(name)
   return newArray
}

function removeLastKitten(name) {
   var newArray = kittens.slice();
   newArray.pop(name)
   return newArray
}

function removeFirstKitten() {
   var newArray = kittens.slice();
   newArray.shift(name)
   return newArray
}

function prependKitten(name) {
   var newArray = kittens.slice();
   newArray.unshift(name)
   return newArray
}
