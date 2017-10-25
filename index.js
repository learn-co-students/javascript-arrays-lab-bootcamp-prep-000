const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(){
  kittens.push("Ralph");
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  kittens.pop("kitten");
}

function destructivelyRemoveFirstKitten(){
  kittens.shift("kitten");
}

function appendKitten(){
  var kittens2 = [...kittens, "Broom"];
  return kittens2;
}

function prependKitten(){
  var kittens2 = ["Arnold", ...kittens];
  return kittens2;
}

function removeLastKitten() {
  var kittens2 = kittens.slice(0, kittens.length - 1);
  return kittens2;
}
function removeFirstKitten(){
  var kittens2 = kittens.slice(1)
  return kittens2;
}
