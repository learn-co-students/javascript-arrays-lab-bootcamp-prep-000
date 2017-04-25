const app = "I don't do much."
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
  var nK = [...kittens, name]
  return nK
}
function prependKitten(name){
  var nK = [ name , ...kittens]
  return nK
}
function removeLastKitten(){
var nK = kittens.slice(0, kittens.length - 1)
return nK
}
function removeFirstKitten(){
var nk = kittens.slice(1)
return nk
}
