const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
destructivelyAppendKitten('ciak');

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
destructivelyPrependKitten('Jon');

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}
destructivelyRemoveLastKitten('Last');

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}
destructivelyRemoveFirstKitten('First');

var newArr = [];
function appendKitten(name) {
  newArr = kittens.concat(name);
  return newArr;
}
appendKitten('pete');

function prependKitten(name){
  var newArr2 = [];
  newArr2.unshift(name);
  newArr2 = newArr2.concat(kittens);
  return newArr2;
}
appendKitten('bob');

function removeLastKitten(){
  var newArr2 = [];
  newArr2 = newArr2.concat(kittens);
  newArr2.pop();
  return newArr2;
}
appendKitten();

function removeFirstKitten(){
  var newArr2 = [];
  newArr2 = newArr2.concat(kittens);
  newArr2.shift();
  return newArr2;
}
appendKitten();
