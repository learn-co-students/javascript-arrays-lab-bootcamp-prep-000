var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(element){
  return kittens.push(element)
}
function destructivelyPrependKitten(element){
  return kittens.unshift(element)
}
function destructivelyRemoveLastKitten(array){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(array){
  return kittens.shift()
}
function appendKitten(element){
  return [...kittens, element]
}
function prependKitten(element){
  return [element, ...kittens]
}
function removeFirstKitten(){
  return kittens.slice(1)
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length -1)
}
