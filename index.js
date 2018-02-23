const app = "I don't do much."
const kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var arr2 = [...kittens, name];
  return arr2;
}

function prependKitten(name){
  var arr2 = [name, ...kittens];
  return arr2;
}

function removeLastKitten(){
  var arr2 = kittens.slice(0, kittens.length - 1);
  return arr2;
}

function removeFirstKitten(){
  var arr2 = kittens.slice(1);
  return arr2;
}