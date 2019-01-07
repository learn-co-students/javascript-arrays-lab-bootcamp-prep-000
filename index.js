var kittens = [] //define your array here

// Add your functions and code here


var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph){
  kittens.push("Ralph")
}

function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(Broom){
return [...kittens, "Broom"]
}

function prependKitten(Arnold){
  return ["Arnold", ...kittens]
}

function removeFirstKitten(){
  var newKittens = [...kittens]
 newKittens.shift()
 return newKittens
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}
