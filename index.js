const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];


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

var appendedkittens;
function appendKitten(name) {

  return appendedkittens = [...kittens, name];
}

function prependKitten(name){

  return appendedkittens = [name, ...kittens];
}

function removeLastKitten(){

  return kittens.slice(0,2);
}

function removeFirstKitten(){

  return kittens.slice(1);
}
