const app = "I don't do much."
function destructivelyAppendKitten(name){
  return kittens.push(name);
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift(1);
}
function appendKitten(name){
  return [...kittens, name]
}
function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten(){
  var newarray = kittens.slice(0, kittens.length-1);
  return newarray;
}
function removeFirstKitten(){
  var newarray = kittens.slice(1);
  return newarray;
}
