var kittens=["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
return kittens.push(name)
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){
  return [...kittens,"Broom"]
}
function prependKitten(name){
  return ["Arnold",...kittens]
}
function removeLastKitten(){
  return  [...kittens.slice(0, 2), ...kittens.slice(3)]
}
function removeFirstKitten(){
  return kittens.slice(-2)
}