const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens.push(name);
 return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten(name) {
    return kittens.pop(name);
}
function appendKitten(name) {
  return [...kittens, name]
}
 function prependKitten(name) {
   return [name,...kittens];
 }
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten(){
  return kittens.shift();
}
