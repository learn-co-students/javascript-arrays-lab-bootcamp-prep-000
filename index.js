var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
    return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
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

function removeFirstKitten(name){
  var newKittens = [...kittens]
  newKittens.shift(name)
  return newKittens
}

function removeLastKitten(name){
  var newKittens = [...kittens]
  newKittens.pop(name)
  return newKittens
}

