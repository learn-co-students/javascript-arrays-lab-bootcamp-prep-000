const app = "I don't do much.";

const kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
//kittens.pop();
kittens.push(name);
return kittens;
}

function destructivelyPrependKitten(name){
  //kittens.pop();
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
function prependKitten(name){
  var kitten = [name, ...kittens];
  return kitten;
}
function appendKitten(name){
  var kitten = [...kittens, name];
  return kitten;
}
function removeLastKitten(){
 var kitten = kittens.slice(0, kittens.length-1);
 //kitten.pop();
 return kitten;
}
function removeFirstKitten(){
  //var kitten = kittens;
var kitten = kittens.slice(1);
return kitten;
}
