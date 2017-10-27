var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(kitten){
  kittens.push(kitten)
  return kittens
}
function destructivelyPrependKitten(kitten){
  kittens.unshift(kitten)
  return kittens
}
function destructivelyRemoveLastKitten(kitten){
  kittens.pop(kitten)
  return kittens
}
function destructivelyRemoveFirstKitten(kitten){
  kittens.shift(kitten)
  return kittens
}
function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.unshift(name)
  return newKittens
}
function appendKitten(name){
  var newKittens = [...kittens]
  newKittens.push(name)
  return newKittens
}
function removeLastKitten(){
  var newKittens = [...kittens]
  newKittens.pop()
  return newKittens
}
function removeFirstKitten(){
  var newKittens = [...kittens]
  newKittens.shift()
  return newKittens
}
