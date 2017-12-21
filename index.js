const app = "I don't do much.";

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

destructivelyAppendKitten("Ralph");

//1st function above

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

destructivelyPrependKitten("Bob");

//2nd function above

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

destructivelyRemoveLastKitten();

//3rd function above

var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

destructivelyRemoveFirstKitten();

//4th function above

var kittens = ["Milo", "Otis", "Garfield"];
function appendKitten(name) {
  var newKittens = kittens.concat (name);
  return newKittens;

}

appendKitten("Broom");

//5th function above

var kittens = ["Milo", "Otis", "Garfield"];
function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}

prependKitten("Arnold");
///add Arnold first

var kittens = ["Milo", "Otis", "Garfield"];
function removeLastKitten() {
  var newKittens = kittens.slice(0,2);
  return newKittens;
}

removeLastKitten();
//remove last

var kittens = ["Milo", "Otis", "Garfield"];
function removeFirstKitten(name) {
  var newKittens = kittens.slice(1);
  return newKittens;
}

removeFirstKitten();
//remove first