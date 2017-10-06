const app = "I don't do much."
var kittens= ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}
function appendKitten(name){
  var NewKittens= [...kittens]
  NewKittens.push(name)
  return NewKittens

}
function prependKitten(name){
  var NewKittens =[...kittens]
  NewKittens.unshift(name)
  return NewKittens

}
function removeLastKitten(){
  var NewKittens =[...kittens]
  NewKittens.pop()
  return NewKittens
}
function removeFirstKitten(){
  var NewKittens =[...kittens]
  NewKittens.shift()
  return NewKittens
}
