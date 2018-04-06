const app = "I don't do much."
 kittens = ['Milo', 'Otis', 'Garfield']

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
  
function destructivelyRemoveFirstKitten(name){
 kittens.shift()
  return kittens
}
 
function appendKitten(name){
  return [...kittens, name]
}
  
function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  var array = kittens
  array = array.slice(0, array.length - 1)
  return array
}

function removeFirstKitten(){
  var array = kittens
    array = array.slice(1, array.length)
  return array
}