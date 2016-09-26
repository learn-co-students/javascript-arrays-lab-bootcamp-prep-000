const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(kitten) {
  return kittens.pop([2])
}

 function destructivelyRemoveFirstKitten() {
   return kittens.shift([0])
 }

 function appendKitten(name) {
   return [...kittens, name]
 }

 function prependKitten(name) {
   return [name, ...kittens]
 }

 function removeLastKitten() {
   return kittens.slice(0, kittens.length - 1)
 }

 function removeFirstKitten() {
   return kittens.slice(1)
 }
