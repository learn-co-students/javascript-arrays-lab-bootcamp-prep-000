const app = "I don't do much."
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
  var myKittens = [...kittens, name];
  return myKittens;
}

function prependKitten(name){
 var myKittens = [name, ...kittens]
 return myKittens;
}

function removeLastKitten(){
var myKittens = kittens.slice (0,kittens.length -1)
return myKittens;
}

function removeFirstKitten(){
var myKittens = kittens.slice (1);
  return myKittens;
}