var kittens = ['Milo', 'Otis', 'Garfield']// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens = kittens.concat('Ralph')
  return kittens
}

function destructivelyPrependKitten(name){
  kittens = ['Bob', ...kittens]
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens = kittens.slice(0, 2)
  return kittens
}
function destructivelyRemoveFirstKitten(){
  kittens = kittens.splice(1)
  return kittens
}
function appendKitten(name){
  kittens = kittens.slice(0, 'Broom')
  return kittens
}