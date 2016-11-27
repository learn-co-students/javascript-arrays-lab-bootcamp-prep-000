const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
};

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
};

function destructivelyRemoveFirstKitten(){
  kittens.shift(name);
  return kittens;
};

function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
};

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
};

function removeLastKitten(){
  var newArray = kittens.slice(0, -1);
  return newArray;
};

function removeFirstKitten(){
  var newArray = kittens.slice(1);
  return newArray;
};
