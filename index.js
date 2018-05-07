const app = "I don't do much."

var kittens = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendKitten(name)  {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten()  {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  var tempKittens = [...kittens, name];
  return tempKittens;
}
function prependKitten(name) {
  var tempKittens = [name,...kittens];
  return tempKittens;
}
function removeLastKitten() {
  var tempKittens = kittens;
  tempKittens = tempKittens.slice(0,tempKittens.length -1);
  return tempKittens;
}
function removeFirstKitten()  {
  var tempKittens = kittens;
  tempKittens = tempKittens.slice(1);
  return tempKittens;
}