const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){

return kittens.push(name)
}
destructivelyAppendKitten('Ralph')

function destructivelyPrependKitten(name){
return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var newKitten = [...kittens, name]
  return newKitten
}

function prependKitten(name){
  var newKitten = [name, ...kittens]
  return newKitten
}

function removeLastKitten(name){
  var newKitten = kittens.slice(0, kittens.length-1)
  return newKitten
}

function removeFirstKitten(name){
  var newKitten = kittens.slice(1)
  return newKitten
}
