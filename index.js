const app = "I don't do much."

function destructivelyAppendKitten(kitten) {
  window.kittens.push(kitten);
}
function destructivelyPrependKitten(kitten){
  window.kittens.unshift(kitten);
}
function destructivelyRemoveLastKitten() {
  return window.kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return window.kittens.shift();
}
function appendKitten(kitten) {
  var newKitten = [...kittens];
  newKitten.push(kitten);
  return newKitten;
}
function prependKitten(kitten) {
  return [kitten,...kittens];
}
function removeFirstKitten(){
  return kittens.slice(1);
}
function removeLastKitten() {
  return kittens.slice(0,-1);
}
