const app = "I don't do much.";
var kittens = ["milo", "Otis", "Garfield"];

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
  var moKittens = [...kittens, name];
  return moKittens;
}
function prependKitten(name){
  var moKittens = [name, ...kittens];
  return moKittens;
}
function removeFirstKitten(){
  var moKittens = kittens.slice(1);
  return moKittens;
}
function removeLastKitten(){
  var moKittens = kittens.slice(0, kittens.length - 1);
  return moKittens;
}