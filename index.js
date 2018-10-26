var kittens = new Array("Milo", "Otis", "Garfield");

 //define your array here


// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  const endKittens = [...kittens, "Broom"]
  return endKittens
}

function prependKitten(name){
  const firstKittens = ["Arnold", ...kittens]
  return firstKittens
}

function removeLastKitten(kitten){
  kitten = kittens.slice(0, kittens.length - 1)
  return kitten
}

function removeFirstKitten(kitty){
  kitty = kittens.slice(1)
  return kitty
}


console.log(removeLastKitten())
console.log(removeFirstKitten())
