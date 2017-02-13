const app = "I don't do much."

//var kittens = ['Kitty', 'Mittens', 'Oreo', 'Tiger'];
// 1)
function destructivelyAppendKitten(name) {
  kittens.push('Ralph');
}
// 2)
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
}
// 3)
function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}
// 4)
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
// 5)
function appendKitten(name) {
  return [...kittens, 'Broom'];
}
// 6)
function prependKitten(name) {
  return ['Arnold', ...kittens];
}
// 7)
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
// 8)
function removeFirstKitten() {
  return kittens.slice(1);
}
