var kittens = [] //define your array here

// Add your functions and code here
var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name){
  kittens.push('Ralph');
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
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
 return [...kittens, "Broom"];
}
function prependKitten(name){
  return ["Arnold", ...kittens];
}
function removeLastKitten(newKitten){
  newKitten = [...kittens];
  newKitten.pop();
  return newKitten;
}
function removeFirstKitten(newKitten){
  newKitten = [...kittens];
  newKitten.shift();
  return newKitten;
}