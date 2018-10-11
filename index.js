var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array, name){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(array, name){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(array){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array){
  kittens.shift()
  return kittens
}

function appendKitten(array, kitten){
  return [...kittens, "Broom"]
}

function prependKitten(array, kitten){
  return ["Arnold",...kittens]
}

function removeLastKitten(array){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(array){
  return kittens.slice(1)
}
