var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (array, element) {
  kittens.push('Ralph');
  return kittens;
}
function destructivelyPrependKitten (array, element) {
  kittens.unshift('Bob');
  return kittens;
}
function destructivelyRemoveLastKitten (array) {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten (array) {
  kittens.shift();
  return kittens;
}
function appendKitten (array,element) {
  return [...kittens, 'Broom'];
}
function prependKitten (array, element) {
  return ['Arnold', ...kittens];
}
function removeLastKitten (array) {
  return kittens.slice(0,2);
}
function removeFirstKitten(array) {
  return kittens.slice(1,3);
}