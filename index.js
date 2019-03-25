var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
destructivelyPrependKitten("Bob");

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
destructivelyRemoveFirstKitten();

function appendKitten(name) {
  return kittens.concat([name]);
}
appendKitten("Broom");

function prependKitten(name) {
 return [name,...kittens];
}
prependKitten("Arnold");

function removeLastKitten() {
  return kittens.slice(0, kittens.length-1);
}
removeLastKitten();

function removeFirstKitten() {
return kittens.slice(1,kittens.length);

}
removeFirstKitten();