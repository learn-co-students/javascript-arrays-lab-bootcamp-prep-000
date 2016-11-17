const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

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
  var newArr = [...kittens, name];
  return newArr;
}

function prependKitten(name){
  var newArr2 = [name, ...kittens];
  return newArr2;
}

function removeLastKitten(){
  var newArr3 = kittens.slice(0, kittens.length-1);
  return newArr3;
}

function removeFirstKitten(){
  var newArr4 = kittens.slice(1);
  return newArr4;
}
