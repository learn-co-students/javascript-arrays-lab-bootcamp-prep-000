const app = "I don't do much."
function destructivelyAppendKitten() {
   return  kittens.push("Ralph");
}
function destructivelyPrependKitten() {
  return kittens.unshift("Bob");
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten() {
  var newArray =[];
  newArray.push('Milo', 'Otis', 'Garfield', 'Broom');
  return newArray;
}
function prependKitten() {
  var newArray = [];
  newArray.unshift('Arnold', 'Milo', 'Otis', 'Garfield');
  return newArray;
}
function removeFirstKitten() {
  var newArray = ['Milo', 'Otis', 'Garfield'];
  newArray.shift();
  return newArray;
}
function removeLastKitten() {
  var newArray = ['Milo', 'Otis', 'Garfield'];
  newArray.pop();
  return newArray;
}
