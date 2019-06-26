var kittens = ["Milo","Otis","Garfield"]
 //define your array here

function destructivelyAppendKitten(name){
   return kittens.push(name)
}// Add your functions and code here

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
