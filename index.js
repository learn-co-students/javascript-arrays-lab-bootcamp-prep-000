var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(Ralph){
  return kittens.push(Ralph);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(Garfield){
  return kittens.pop(Garfield)
}
function destructivelyRemoveFirstKitten(Milo){
  return kittens.shift(Milo)
}
function appendKitten(name){
  return [...kittens, name];
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}
function removeFirstKitten(){
  return kittens.slice(1)
}