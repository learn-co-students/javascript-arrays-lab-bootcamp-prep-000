const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens = ['Milo', 'Otis', 'Garfield']
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
  return [...kittens, name] //puts name at first
}
function prependKitten(name){ //puts name at end
  return [name, ...kittens]
}
function removeLastKitten(){
  return kittens.slice(0,kittens.length -1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}