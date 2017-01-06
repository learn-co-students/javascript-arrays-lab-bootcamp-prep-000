const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];
var array;

function destructivelyAppendKitten(element){
  kittens.push(element);
  return kittens;
}

function destructivelyPrependKitten(element){
 kittens.unshift(element);
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

function appendKitten(element){
  array = [...kittens, element]
  return array;
}
function prependKitten(element){
  array = [element, ...kittens];
  return array;
}
  function removeLastKitten(){
 return kittens.slice(0, kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
