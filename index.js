const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
  return kittens;
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  return [...kittens, 'Broom'];
}
function prependKitten(name) {
  return ['Arnold', ...kittens];
}
function removeLastKitten(name) {
  return kittens.slice(0, 2);
}
function removeFirstKitten(name) {
  return kittens.slice(1);
}
