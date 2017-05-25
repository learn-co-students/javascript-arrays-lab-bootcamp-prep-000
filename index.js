const app = "I don't do much."

function kittens(names){
  names = ['Milo','Otis','Garfield']
}

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function appendKitten(name){
  var newArray = [...kittens,name]
  return newArray
}

function prependKitten(name){
  var newArray = [name,...kittens]
  return newArray
}

function removeLastKitten(){
  var newArray = kittens.slice(0,length-1)
  return newArray
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function removeFirstKitten(){
  var newArray = kittens.slice(1)
  return newArray
}
