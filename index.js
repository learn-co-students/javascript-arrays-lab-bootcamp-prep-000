const app = "I don't do much."
kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(arr)
{
  kittens=[...kittens,arr]
}
function destructivelyPrependKitten(arr)
{
  kittens.unshift(arr)
}
function destructivelyRemoveLastKitten(arr){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(arr){
  kittens.shift()
}
function appendKitten(arr){
  return [...kittens,arr]
}
function prependKitten(arr){
  return [arr,...kittens]
}
function removeLastKitten(arr){
  var kitt=[...kittens]
  kitt.pop()
  
  return kitt
}
function removeFirstKitten(name){
  var kitt=[...kittens]
  kitt.shift()
  return kitt
}
