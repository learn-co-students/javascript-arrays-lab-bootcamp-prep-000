const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(addedElement) {
  kittens.push(addedElement)
  return kittens
}
function destructivelyPrependKitten(addedElement) {
  kittens.unshift(addedElement)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(addedElement) {
  return [...kittens, addedElement]
} 

function prependKitten(addedElement) {
  return [addedElement, ...kittens]
} 

function removeFirstKitten() {
  return kittens.slice(1)
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)
}

console.log(destructivelyPrependKitten(kittens, "Ellie"))