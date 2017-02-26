const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)  
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
  var newArr = kittens.slice(0)
  newArr.push(name)
  return newArr;
}
function prependKitten(name){
  var newArr = kittens.slice(0)
  newArr.unshift(name)
  return newArr;  
}
function removeLastKitten(){
  var newArr = kittens.slice(0)
  newArr.pop()
  return newArr;
}
function removeFirstKitten(){
  var newArr = kittens.slice(0)
  newArr.shift()
  return newArr;
}