const app = "I don't do much."
var kittens=["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
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

function appendKitten(){
  var appendKitten = [...kittens, "Broom"]
  return appendKitten;
}

function prependKitten(){
  var prependKitten = ["Arnold", ...kittens];
  return prependKitten;
}

function removeLastKitten(){
  var removeLastKitten=kittens.slice(0, kittens.length - 1);
  return removeLastKitten;
}

function removeFirstKitten(){
  var removeFirstKitten=kittens.slice(1);
  return removeFirstKitten;
}
