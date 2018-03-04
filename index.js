const app = "I don't do much."
var kitten = [ "Milo","Otis","Garfield" ]

function destructivelyAppendKitten(){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(){
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

function appendKitten(){
var cats = [...kitten,"Broom"]
return cats
}

function prependKitten(){
  var cats =["Arnold",...kitten]
  return cats
}

function removeLastKitten (){
 var removeKitten = kitten.slice(0,kitten.length -1)
  return removeKitten
}

function removeFirstKitten(){
  var lastKittens= kitten.slice(1)
  return lastKittens
  
}
