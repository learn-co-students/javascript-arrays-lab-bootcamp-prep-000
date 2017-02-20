const app = "I don't do much."


var kittens =["Milo", "Otis", "Garfeild"];

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

var array=[];

function appendKitten(name){
  array = [...kittens, name]
  return array;
}

function prependKitten(name){
  array=[name, ...kittens];
  return array;
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}
