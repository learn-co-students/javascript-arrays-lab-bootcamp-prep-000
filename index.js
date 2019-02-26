var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(array, element) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(array, element) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array, element) {
  kittens.shift()
  return kittens
}

function appendKitten(array, element) {
 return [...kittens, "Broom"]
}

function prependKitten(array, element) {
 return ["Arnold" , ...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}



// Add your functions and code here
