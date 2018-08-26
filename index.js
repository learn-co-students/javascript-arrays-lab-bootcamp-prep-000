var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(name){
  kittens.pop(name)
  return kittens
}
function destructivelyRemoveFirstKitten(name){
  kittens.splice(0,1);
  return kittens
}

function appendKitten(name){
  return kittens.concat(name)
}
function prependKitten(name){
  return [name ,...kittens]
}
function removeLastKitten(name){
  return kittens.slice(0, 2)
}
function removeFirstKitten(name){
  return kittens.slice(1)
}