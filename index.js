const app = "I don't do much."

//Test# 1
var kittens = ['Milo','Otis','Garfield'];

//Test# 2 : appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

//Test# 3 : prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

//Test# 4 : removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

//Test# 5 : removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten(){
 kittens.shift()
 return kittens
}

//Test# 6 : 'appends a kitten to the kittens array and returns a new array
function appendKitten(name){
  var array = [...kittens,name]
  return array
}

//Test# 7 : prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){
  var array = [name,...kittens]
  return array
}

//Test# 8 : removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(){
  var array2 = kittens.slice(0, kittens.length - 1)
  return array2
}

//Test# 9 : removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(){
  var array3 = kittens.slice(1)
  return array3
}