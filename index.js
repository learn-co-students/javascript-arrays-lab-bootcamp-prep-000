var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(name){
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var addEndKitten = [...kittens, "Broom"];
  return addEndKitten;
}

function prependKitten(name){
  var prependKittens = ["Arnold", ...kittens];
  return prependKittens;
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}






