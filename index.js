function kittens(){
var kittens = ["Milo", "Otis", "Garfield"];
return kittens;
}

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

function appendKitten(name){
  var arr = [...kittens, name];
  return arr;
}

function prependKitten(name){
  var arr = [name, ...kittens];
  return arr;
}

function removeLastKitten(){
  var arr = kittens;
  arr.pop();
  return arr;
}

function removeFirstKitten(){
  var arr = kittens;
  arr.shift();
  return arr;
}