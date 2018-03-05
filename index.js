const app = "I don't do much."
function destructivelyAppendKitten(n){
  kittens.push(n)
  return kittens
}
function destructivelyPrependKitten(n){
  kittens.unshift(n)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens = kittens.slice(0,-1)
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(name){
 return[...kittens,name] 
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(){
  return kittens.slice(0,-1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}