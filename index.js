const app = "I don't do much."

// No Kittens were harmed during the creation of this code.

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
//destructivelyAppendKitten("Ralph")



var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
  }
//destructivelyPrependKitten("Bob")

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveLastKitten(){
  kittens.pop(-1)
  return kittens
  }
//destructivelyRemoveLastKitten()

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
  }
//destructivelyRemoveFirstKitten()

var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
  return [...kittens,name]

}
//appendKitten("Broom")

var kittens = ["Milo", "Otis", "Garfield"]
function prependKitten(name){
  return [name,...kittens]
}
//prependKitten("Arnold")

var kittens = ["Milo", "Otis", "Garfield"]
function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}
//removeLastKitten()

var kittens = ["Milo", "Otis", "Garfield"]
function removeFirstKitten(){
  return kittens.slice(1)
}
//removeFirstKitten()
