const app = "I don't do much."
var kittens= ["Milo", "Otis", "Garfield"]
//directly add a kitten at the END of the array
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
//add a kitten at the BEGN. of the array
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens

}
//removes the LAST kitten from the kittens array
function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}
//removes the FIRST kitten from the kittens array
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}
//adds kitten at END
function appendKitten(name){
  return[...kittens,name]
}
//adds kitten at BEG
function prependKitten(name){
  return[name,...kittens]
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}
//removes the first kitten from the kittens array and returns a new array
function removeFirstKitten(){
  return kittens.slice(1)
}
