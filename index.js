// Add your functions and code here
function destructivelyAppendKitten(name){
  var kittens = window.kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  var kittens = window.kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  var kittens = window.kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  var kittens = window.kittens.shift();
  return kittens;
}
function appendKitten(name){
  return window.kittens.concat(name);
}
function prependKitten(name){
  return [name, ...window.kittens];
}
function removeLastKitten(){
  return window.kittens.slice(0, window.kittens.length-1);
}
function removeFirstKitten(){
  return window.kittens.slice(1);
}