const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

kittens = ['Milo', 'Otis', 'Garfield'];

function appendKitten(name){
  var newArray = [...kittens, name];
  return newArray;
}

kittens = ['Milo', 'Otis', 'Garfield'];

function prependKitten(name){
  var newArray = [name, ...kittens];
  return newArray;
}

kittens = ['Milo', 'Otis', 'Garfield'];

function removeLastKitten(){
  var newArray = kittens.slice(0, kittens.length - 1);
  return newArray;
}

kittens = ['Milo', 'Otis', 'Garfield'];

function removeFirstKitten(){
  var newArray = kittens.slice(1);
  return newArray;
}