const app = "I don't do much."

//Test# 1
var kittens = ['Milo','Otis','Garfield'];

//Test# 2
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

//Test# 3
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

//Test# 4
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

//Test# 5
function destructivelyRemoveFirstKitten(){
 kittens.shift()
 return kittens
}

//Test# 6
function appendKitten(name){
  var array = [...kittens,name]
  return array
}

//Test# 7
function prependKitten(name){
  var array = [name,...kittens]
  return array
}

//Test# 8
function removeLastKitten(){
  var array2 = kittens.slice(0, kittens.length - 1)
  return array2
}

//Test# 9
function removeFirstKitten(){
  var array3 = kittens.slice(1)
  return array3
}