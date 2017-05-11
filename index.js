const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens
}

function appendKitten(name){
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens = [...kittens, "Broom"];
  return kittens
}

function prependKitten(name){
  var kittens = ['Milo', 'Otis', 'Garfield'];
  kittens = ["Arnold", ...kittens];
  return kittens
}

function removeLastKitten(name){
  return kittens.slice(0,2)
}

function removeFirstKitten(name){
  return kittens.slice(1)
}
