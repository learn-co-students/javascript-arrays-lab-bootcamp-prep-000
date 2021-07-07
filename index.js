var kittens = ['Milo', 'Otis', 'Garfield']

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
function removeLastKitten(){
  var array1 = []
  array1 = array1.concat(kittens)
  array1.pop()
  return array1
}
function appendKitten(name){
  var array1 = []
  array1 = array1.concat(kittens)
  array1.push(name)
  return array1
}
function prependKitten(name){
  var array1 = []
  array1 = array1.concat(kittens)
  array1.unshift(name)
  return array1
}
function removeFirstKitten(){
  var array1 = []
  array1 = array1.concat(kittens)
  array1.shift()
  return array1
}
