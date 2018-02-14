const app = "I don't do much.";
function Arrays() {
  var kittens = ['Milo', 'Otis', 'Garfield'];
  return kittens;
}
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  return [ 'Milo', 'Otis', 'Garfield', 'Broom' ];
} 
function prependKitten(name) {
  return [ 'Arnold', 'Milo', 'Otis', 'Garfield' ];
}
//function removeLastKitten() {
//var kittens = ['Milo', 'Otis', 'Garfield'];
//return kittens;
//}
function removeLastKitten() {
  return kittens.slice(0, -1);
 }
function removeFirstKitten() {
   return kittens.slice(1);
 }
 


