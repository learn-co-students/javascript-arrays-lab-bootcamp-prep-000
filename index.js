const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(index){
kittens.push(index)
//console.log(myArr)
return kittens
}
function destructivelyPrependKitten(index){
return kittens.unshift(index)
}
function destructivelyRemoveLastKitten(index){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
  }
function appendKitten(index){
  //var newArray = kittens.conca(index)
  return [...kittens, index]
}
function prependKitten(index){
  var newArray = [index, ...kittens]
  return newArray
}
function removeLastKitten(){
  //kittens = kittens.splice(0,2))
return kittens.slice(0,kittens.length-1)
}
function removeFirstKitten(){
  return kittens.slice(1,kittens.length)
}
