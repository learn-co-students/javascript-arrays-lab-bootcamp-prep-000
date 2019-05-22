var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  return(kittens.push(name))
}
function destructivelyPrependKitten(name){
  return(kittens.unshift(name))
}
function destructivelyRemoveLastKitten(){
  return(kittens.pop())
}
function destructivelyRemoveFirstKitten(){
  return(kittens.shift())
}
function appendKitten(name){
 var name2=[...kittens,name]
  return(name2)
}
function prependKitten(name){
  var name2=[name,...kittens]
  return(name2)
}
function removeLastKitten(name){
  var name2=kittens.slice(0, kittens.length -1)
  return(name2)
}
function removeFirstKitten(name){
  var name2= kittens.slice(1)
  return(name2)
}
// Add your functions and code here
