const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.shift(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop(-1)
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  kittens= (...kittens,name)
  return kittens
}
