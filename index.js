const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

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
  var new_a = kittens.slice();
  new_a.push(name);
  return new_a;
}

function prependKitten(name){
  var new_a = kittens.slice();
  new_a.unshift(name);
  return new_a;
}

function removeLastKitten(){
  var new_a = kittens.slice();
  new_a.pop();
  return new_a;
}

function removeFirstKitten(){
  var new_a = kittens.slice();
  new_a.shift();
  return new_a;
}
