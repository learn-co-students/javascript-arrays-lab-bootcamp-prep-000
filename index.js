var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
  
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveFirstKitten(){
 return kittens.shift()
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function appendKitten(name){
return kittens.concat(name)  
}

function prependKitten(name){
return [name,...kittens]
}
function removeLastKitten(){
  return kittens.slice(0,2)
}
function removeFirstKitten(){
  return kittens.slice(1)}
