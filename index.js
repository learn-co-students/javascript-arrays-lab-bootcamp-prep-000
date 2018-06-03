const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"];
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}
kittens = ["Milo","Otis","Garfield"];
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}
kittens = ["Milo","Otis","Garfield"];
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}
kittens = ["Milo","Otis","Garfield"];
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}
kittens = ["Milo","Otis","Garfield"];
function appendKitten(name) {
  return [...kittens, `${name}`];}
function prependKitten(name) {
  return [`${name}`,...kittens];}
function removeLastKitten() {
  return kittens.slice(0, kittens.length -1);
}
function removeFirstKitten() {
  return kittens.slice(1);
}  