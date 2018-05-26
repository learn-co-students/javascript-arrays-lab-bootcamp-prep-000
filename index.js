const app = "I don't do much."
function destructivelyAppendKitten (Ralph){
  kittens.push("Ralph")
}
function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(Broom){
  var array = [...kittens, "Broom"]
  return array
}
function prependKitten(Arnold){
  var arr = ["Arnold", ...kittens]
  return arr
}
function removeLastKitten(){
  var cats = kittens.slice(0, kittens.length - 1)
  return cats
}
function removeFirstKitten(){
  var cat = kittens.slice(1)
  return cat
}