var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(ele){
  kittens.push(ele)
  return kittens
}
function destructivelyPrependKitten(ele){
  kittens.unshift(ele)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}
function appendKitten(name){
  return [...kittens, name]
}
