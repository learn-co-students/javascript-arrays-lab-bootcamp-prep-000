const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

console.log(kittens)
kittens.push("HuntsHunts")

var newK = kittens

console.log(newK)

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}


 //trouble section
 
function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newK = kittens
  newK.push(name)
  return newK
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newK = kittens
  newK.unshift(name)
  return newK
}

function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newK = kittens
  newK.pop()
  return newK
}

function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newK = kittens
  newK.shift()
  return newK
}