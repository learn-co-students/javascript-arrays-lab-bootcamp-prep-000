const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  var name = "Ralph";
  return kittens.push(name);
}
function destructivelyPrependKitten(name1) {
  var name1 = "Bob";
  return kittens.unshift(name1);
}
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
function appendKitten(name2) {
  var name2 = [...kittens, "Broom"];
  return name2;
}
function prependKitten(name3) {
  var name3 = ["Arnold", ...kittens];
  return name3;
}
function removeLastKitten() {
  var name4 = kittens.slice(0, kittens.length - 1);
  return name4
}
function removeFirstKitten() {
  var name5 = kittens.slice(1);
  return name5
}
