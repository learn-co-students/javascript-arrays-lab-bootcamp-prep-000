const app = "I don't do much."

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
}

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function destructivelyRemoveLastKitten(){
kittens.pop();
}

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  var name = "Broom";
  kittens = [...kittens, name];
  return kittens;
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  var name = "Arnold";
  kittens = [name, ...kittens];
  return kittens;
}

function kittens(){
  var kittens = ["Milo", "Otis", "Garfield"]
}

function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens.slice(1);
}
