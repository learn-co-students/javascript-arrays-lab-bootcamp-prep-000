var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function appendKitten(name){
    return [...kittens, "Broom"]
}

function prependKitten(name){
  return ["Arnold", ...kittens]
}

function removeFirstKitten(){
  return kittens.slice(1)
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}