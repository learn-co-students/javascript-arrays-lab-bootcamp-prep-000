const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];

//enter a kitten into the beginning of the kittens
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

//enter a kitten into the end of the kittens
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

//remove a kitten into the end of the kittens
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

//remove a kitten into the first of the kittens
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var array= [...kittens, name];
  return array;
}

function prependKitten(name){
  var array= [name, ...kittens];
  return array;
}

function removeLastKitten(){
  var array= kittens;
  return array.slice(0, array.length - 1);
}

function removeFirstKitten(){
  var array= kittens;
  return array.slice(1);
}
