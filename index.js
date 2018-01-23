const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  return kittens.push(name);
}destructivelyAppendKitten(name);

function destructivelyPrependKitten (name){
  return kittens.unshift(name);
}destructivelyPrependKitten(name);

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name);
}destructivelyRemoveLastKitten(name);

function destructivelyRemoveFirstKitten(name){
  return kittens.shift(name);
}destructivelyRemoveFirstKitten(name);

function appendKitten(name){
   return [...kittens, name];
}appendKitten(name);

function prependKitten(name){
  return [name, ...kittens];
}prependKitten(name);

function removeLastKitten(name){
  return kittens.slice(0, kittens.length-1);
}removeLastKitten(name);

function removeFirstKitten(name){
  return kittens.slice(1);
}removeFirstKitten;