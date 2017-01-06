const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"]
kittens;
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
destructivelyAppendKitten("Ralph")

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
destructivelyPrependKitten("Bob")

function destructivelyRemoveLastKitten() {
kittens.pop()
return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens

}

function appendKitten(name){
  var kitten = [...kittens,name]
         return kitten
}
appendKitten("Broom")

function prependKitten(name){
  var kitten=[name,...kittens]
         return kitten
}
prependKitten("Arnold")

function removeLastKitten(){
    var kitten=kittens.slice(0,kittens.length-1)
         return kitten
}
removeLastKitten()
function removeFirstKitten(){
  var kitten=kittens.slice(1)
       return kitten
}
removeFirstKitten()
