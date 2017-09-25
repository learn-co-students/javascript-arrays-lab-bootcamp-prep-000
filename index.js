const app = "I don't do much."



function kittens(){
  var kittens = ["Milo","Otis","Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
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

function appendKitten(name){
 var arr = [...kittens,name]
 return arr
}

function prependKitten(name){
 var purr = [name,...kittens]
 return purr
}

function removeLastKitten(){
 var meow = kittens.slice(0,-1)
 return meow
}

function removeFirstKitten(){
 var scratch = kittens.slice(1)
 return scratch
}
