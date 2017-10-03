const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var newKittens = [];
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function  destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function  destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function  appendKitten(name) {
  var newKittens = [ ...kittens, name ];
  return newKittens;
}
function  prependKitten(name) {
  var newKittens = [ name, ...kittens ];
  return newKittens;
}

function  removeFirstKitten() {
  console.log("1  newKittens - ", newKittens);
  var newKittens = kittens.slice(1);
  console.log("1  return ", newKittens);
  return newKittens;
}

function  removeLastKitten() {
console.log("2  newKittens - ", newKittens);
var newKittens = kittens.slice(0, kittens.length - 1);
console.log("2  return ", newKittens);
  return newKittens;
}
