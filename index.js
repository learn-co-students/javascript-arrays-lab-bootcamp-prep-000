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
  var a = [ ...kittens, name];
  return a;
}

function prependKitten(name){
  var a = [name, ...kittens];
  return a;
}

function removeLastKitten(){
  var a = kittens.slice(0, kittens.length - 1);
  return a;
}

function removeFirstKitten(){
  var a = kittens.slice(1, kittens.length);
  return a;
}
