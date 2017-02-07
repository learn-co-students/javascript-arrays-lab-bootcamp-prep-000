//const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
var morekittens = kittens.push(name);
return morekittens;
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return[name, ...kittens];
}

function removeLastKitten(){
  var lesskittens = kittens.slice(0,kittens.length-1)
  return lesskittens;
}

function removeFirstKitten(){
  var lesskittens = kittens.slice(1);
  return lesskittens;
}
