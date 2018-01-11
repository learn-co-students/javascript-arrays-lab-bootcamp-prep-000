const app = "I don't do much.";
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  kittens.pop(name);
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
function appendKitten(name){
  var newKitten = [...kittens, name];
  return newKitten
}
function prependKitten(name){
  var newKitten = [name, ...kittens];
  return newKitten
}
function removeLastKitten(){
  var newKitten = [...kittens];
  newKitten.pop();
  return newKitten
}
function removeFirstKitten(){
  var newKitten = [...kittens];
  newKitten.shift();
  return newKitten
}
