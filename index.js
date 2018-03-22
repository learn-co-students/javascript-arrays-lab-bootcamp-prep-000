const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
function appendKitten(name) {
  return [...kittens, name];
}
function prependKitten(name) {
  return [name, ...kittens];
}
function removeLastKitten() {
  return kittens.splice(0, kittens.length - 1);
}
function removeFirstKitten() {
  return kittens.splice(1);
}
//AM I MISSING SOMETHING???  I EVEN DOUBLED CHECKED WITH THE SOLUTIONS PAGE AND IT IS NOT WORKING BUT MY CODE APPEARS TO BE PERFECT!  