const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
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
  var newcat = [...kittens, name]
  return newcat
}
function prependKitten(name){
  var newercat = [name, ...kittens]
  return newercat
}
function removeLastKitten(){
  var deadcat = kittens.slice(0, kittens.length -1)
  return deadcat
}
function removeFirstKitten(){
  var deadcat2 = kittens.slice(1, kittens.length)
  return deadcat2
}
