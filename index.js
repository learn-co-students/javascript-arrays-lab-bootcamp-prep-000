/*const app = "I don't do much.";*/
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  var newArray = [];
  return newArray=[...kittens, name];
}

function prependKitten(name){
  var newArray2 = [];
  return newArray2=[name, ...kittens];
}

function removeLastKitten(){
  var newArray3 = [];
  return newArray3 = [...kittens.slice(0, kittens.length-1)]
}

function removeFirstKitten(){
  var newArray4 = [];
  return newArray4 = [...kittens.slice(1, kittens.length)]
}
/*destructivelyAppendKitten("Smokey");

var destructivelyPrependKitten = function(name){
  kittens.unshift(name);
};*/

//some other comment
