const app = "I don't do much."

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  return[...kittens, "Broom"];
}

function prependKitten(name){
  return["Arnold", ...kittens]
}

function removeLastKitten(name){
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(name){
  return kittens.slice(1)
}
