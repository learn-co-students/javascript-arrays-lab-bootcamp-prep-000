const app = "I don't do much."

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name)
}

kittens()


function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

kittens()

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

kittens()

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

kittens()

function appendKitten(name){
  var kitten = name
  return [...kittens, name]
  kittens()
}



function prependKitten(name){
  var kitten = name
  return [name, ...kittens]
  kittens()
}



function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
  kittens()
}


function removeFirstKitten(){
  return kittens.slice(1)
  kittens()
}
