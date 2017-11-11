const app = "I don't do much."

function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
  var k = [...kittens, name]
  return k
}
function prependKitten(name){
  var k = [name, ...kittens]
  return k
}
function removeLastKitten(){
var k = kittens.slice(0, kittens.length-1)
return k
}
function removeFirstKitten(){
var k = kittens.slice(1)
return k
}
