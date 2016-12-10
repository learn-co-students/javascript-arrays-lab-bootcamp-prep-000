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
  return [...kittens,name];
}
function prependKitten(name){
  return [name,...kittens];
}
function removeLastKitten(){
  var array = [...kittens];
  array.pop();
  return array;
}
function removeFirstKitten(){
  var array = [...kittens];
  array.shift();
  return array;
}
