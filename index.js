const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

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
  var result = kittens.slice(0);
  result.push(name);
  return result;
}

function prependKitten(name){
  var result = kittens.slice(0);
  result.unshift(name);
  return result;
}

function removeLastKitten(){
  var result = kittens.slice(0);
  result.pop();
  return result;
}

function removeFirstKitten(){
  var result = kittens.slice(0);
  result.shift();
  return result;
}
