const app = "I don't do much."
function kit(){
  var kittens = ["Milo", "Otis", "Garfield"];
}
kit();
function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
kit();
function destructivelyRemoveLastKitten(){
  kittens.pop();
}
kit();
function destructivelyRemoveFirstKitten(){
  kittens.shift();
}
kit();
function appendKitten(name){
  var array = [...kittens, name]
  return array;
}
function prependKitten(name){
  var array = [name, ...kittens]
  return array;
}
function removeLastKitten(){
  var array = kittens.slice(0, kittens.length - 1)
  return array;
}
function removeFirstKitten(){
  var array = kittens.slice(1, kittens.length)
  return array;
}
