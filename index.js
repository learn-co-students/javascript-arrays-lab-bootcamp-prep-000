const app = "I don't do much."


function kittens(){
  return kittens=['Milo', 'Otis', 'Garfield']
}

function destructivelyAppendKitten(){
  var kittens=['Milo', 'Otis', 'Garfield']
  return kitten.push("Ralph")
}

function destructivelyPrependKitten(){
var kittens=['Milo', 'Otis', 'Garfield']
return kitten.shift("Bob")
}

function destructivelyRemoveLastKitten(){
var kittens=['Milo', 'Otis', 'Garfield']
return kitten.pop()
}

function destructivelyRemoveFirstKitten(){
  var kittens=['Milo', 'Otis', 'Garfield']
  return kitten.shift()
}

function appendKitten(){
  var kittens=['Milo', 'Otis', 'Garfield']
  var newArray=[kittens.slice(0,kittens.length),"Broom"]

  return newArray
}
