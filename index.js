var kittens = ['Milo','Otis','Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten (name) {

  return kittens.shift()
}
function appendKitten (name){
  let kitties =  [...kittens, name]
  return kitties
}

 function prependKitten(name){
   let kitties = [name,...kittens]
   return kitties
 }
function removeLastKitten(){
  let babyCats = kittens.slice(0,kittens.length-1)
  return babyCats
}
 function removeFirstKitten(){
   let babyCats = kittens.slice(1,kittens.length)
   return babyCats
 }
