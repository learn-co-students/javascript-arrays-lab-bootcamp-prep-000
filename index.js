const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}
function appendKitten(name){
  var newArray=[...kittens,name]
  return newArray
}
function prependKitten(name){
  var newArray2=[name,...kittens]
  return newArray2
}
function removeLastKitten(name){
  var newArray3=kittens.slice(0,kittens.length-1)
  return newArray3
}
function removeFirstKitten(name){
  var newArray4=kittens.slice(1)
  return newArray4
}
