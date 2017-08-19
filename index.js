const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(Bob){
  kittens.unshift(Bob)
  return kittens
}

function destructivelyRemoveLastKitten(Garfield){
  kittens.pop(Garfield)
  return kittens
}

function destructivelyRemoveFirstKitten(Bob){
  kittens.shift(Bob)
  return kittens
}

function appendKitten(name){
  return [...kittens, "Broom"]
}
function prependKitten(name){
  return ["Arnold",...kittens]
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
