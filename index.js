const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
  return;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return;
}

function appendKitten(name){
  var other = [...kittens, name];
  return other;
}

function prependKitten(name){
  var other = [name, ...kittens];
  return other;
}

function removeLastKitten(){
  var other = [...kittens];
  other.pop();
  return other;
}

function removeFirstKitten(){
  var other = [...kittens];
  other.shift();
  return other;
}


