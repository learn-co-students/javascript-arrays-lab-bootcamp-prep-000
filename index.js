const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(`${name}`);
  var newKittens = kittens.slice();
  return newKittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(`${name}`);
  var newKittens = kittens.slice();
  return newKittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  var newKittens = kittens.slice();
  return newKittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  var newKittens = kittens.slice();
  return newKittens;
}

function appendKitten(name){
  var newKittens = [...kittens, `${name}`];
  return newKittens;
}

function prependKitten(name){
  var newKittens = [`${name}`,...kittens];
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0,kittens.length-1);
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}
