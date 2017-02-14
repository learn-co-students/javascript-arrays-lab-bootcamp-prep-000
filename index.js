const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(element) {
  kittens.push(element);
  return kittens;
}
function destructivelyPrependKitten(element){
  kittens.unshift(element);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function appendKitten(element){
  var myKittens = [...kittens, element];
  return myKittens;
}
function prependKitten(element) {
  var myKittens = [element, ...kittens];
  return myKittens;
}
function removeLastKitten() {
  var myKittens = kittens.slice(0, kittens.length - 1);
  return myKittens;
}
function removeFirstKitten() {
  var myKittens = kittens.slice(1);
  return myKittens;
}
