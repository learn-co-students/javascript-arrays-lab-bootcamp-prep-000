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
  var kits = [...kittens, name];
  return kits;
}
function prependKitten(name){
  var kits = [name, ...kittens];
  return kits;
}
function removeLastKitten(){
  var kits = kittens.slice(0, kittens.length-1);
  return kits;
}
function removeFirstKitten(){
  var kits = kittens.slice(1);
return kits;
}
