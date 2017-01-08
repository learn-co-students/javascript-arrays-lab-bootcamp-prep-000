var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(name){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  var newArr =  [...kittens, name];
  return newArr;
}
function prependKitten(name){
  var newArr = [name, ...kittens];
  return newArr;
}
function removeFirstKitten(){
  return kittens.slice(1);
}
function removeLastKitten(){
  return kittens.slice(0, kittens.length-1);
}
