kittens=['Milo','Otis','Garfield']
function destructivelyAppendKitten(name){
kittens.push(name)  
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  var array2= [...kittens,name]
  return array2
}
function prependKitten(name){
  var array2=[name,...kittens]
  return array2
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}