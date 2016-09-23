const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}
 function destructivelyRemoveLastKitten(name){
   kittens.pop()
 }

function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}
function appendKitten(name){
  var newKittens = [...kittens, "Broom"]
  return newKittens
}

function prependKitten(name){
  var newKittensp =  ["Arnold", ...kittens]
  return newKittensp
}

function removeLastKitten(){
  var rKittens = kittens.slice(0, kittens.length-1)
  return rKittens
}

function removeFirstKitten() {
  var fKitten = kittens.slice(1)
  return fKitten
}
