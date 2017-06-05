const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function removeFirstKitten(){

var newKitten = kittens.slice()
newKitten.shift()
return newKitten


}

function removeLastKitten(){

var newKitten = kittens.slice()
newKitten.pop()
return newKitten


}

function prependKitten(name){
  var newKitten = kittens.slice()
  newKitten.unshift(name)
  return newKitten
}

function appendKitten(name){
  var newKitten = kittens.slice()
  newKitten.push(name)
  return newKitten
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
