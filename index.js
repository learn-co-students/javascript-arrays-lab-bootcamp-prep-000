var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name){
  var kitties = kittens
  kitties =  [...kittens, name]
  return(kitties)
}

function prependKitten(name){
  var kitties = kittens
  kitties =  [name, ...kittens]
  return(kitties)
}