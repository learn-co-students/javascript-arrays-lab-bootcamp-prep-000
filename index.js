var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
var destructivelyAppendKitten = (array) => {
  kittens.push("Ralph");
};

var destructivelyPrependKitten = () => {
  kittens.unshift("Bob");
};

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
};

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
};

var appendKitten = () => {
  var kittens2 = [...kittens, "Broom"];
  return kittens2;
};

var prependKitten = () => {
  var kittens2 = ["Arnold", ...kittens];
  return kittens2;
};

var removeLastKitten = () => {
  var kittens2 = kittens.slice(0, kittens.length - 1);
  return kittens2;
};

var removeFirstKitten = () => {
  var kittens2 = kittens.slice(1, kittens.length);
  return kittens2;
};

