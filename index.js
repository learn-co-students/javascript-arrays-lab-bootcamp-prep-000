kittens = ["Milo", "Otis", "Garfield"]


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
  var Kittens = ["Milo", "Otis", "Garfield"]
  var new_array = [...kittens, name]
  return new_array
}
function prependKitten(name){
 var Kittens = ["Milo", "Otis", "Garfield"]
 var new_array = [name, ...kittens]
  return new_array
}
function removeFirstKitten(){
  var new_array = kittens.slice(1)
  return new_array
}
function removeLastKitten(){
  var new_array = kittens.slice(0, 2)
  return new_array
}
