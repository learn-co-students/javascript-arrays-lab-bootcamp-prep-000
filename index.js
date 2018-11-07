var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}
destructivelyAppendKitten("Ralph")
function destructivelyPrependKitten(){
  kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(){
  var kittens2 = [...kittens, "Broom"]
  return kittens2
}
function prependKitten(){
  var kittens2 = ["Arnold", ...kittens]
  return kittens2
}
function removeLastKitten(){
  var kittens2 = kittens.slice(0, 2)
  return kittens2
}
function removeFirstKitten() {
  var kittens2 = kittens.slice(1)
  return kittens2
}