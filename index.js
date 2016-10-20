const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name){
  kittens.pop();
}
function destructivelyRemoveFirstKitten(name){
  kittens.shift();
}
function appendKitten(name){
  var kitten = [...kittens, name];
  return kitten;
}
function prependKitten(name){
  var kitten = [name, ...kittens];
  return kitten;
}
function removeLastKitten(){
  var kitten = kittens.pop();
  return kitten;
}
function removeFirstKitten(){
  var kitten = kittens.slice(1);
  return kitten;
}
