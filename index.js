const app = "I don't do much.";
var kittens=["Milo", "Otis", "Garfield"];

removeLastKitten()

function destructivelyAppendKitten(y){
  return  kittens.push(y)
}

function destructivelyPrependKitten(y){
  return kittens.unshift(y)
}

function removeFirstKitten(x){
  return kittens.slice(1)
}

function destructivelyRemoveLastKitten(x){
  kittens.pop()
}

function removeLastKitten(){
 return  kittens.slice(0,kittens.length-1)
}

function prependKitten(y){
  return [y,...kittens]
}

function appendKitten(y){
  return [...kittens,y]
}

function destructivelyRemoveFirstKitten(x){
  kittens.shift()
  
}