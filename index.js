const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

//Why doesnt this work?
// Prob because i assigned the new array to the original?
/*function appendKitten(name) {
  kittens = [...kittens, name]
  return kittens;
}*/

// I understand now. I had to declare new variable to save and return new array with out touching original. duh.
var kittens = ["Milo", "Otis", "Garfield"]
function appendKitten(name){
var moreKittens = [...kittens, name]
return moreKittens
}

function prependKitten(name) {
var evenMoreKittens =[name, ...kittens]
  return evenMoreKittens;
}

function removeLastKitten() {
var lessKittens = kittens.slice(0, kittens.length - 1);
  return lessKittens;
}

function removeFirstKitten() {
var evenLessKittens = kittens.slice(1);
return evenLessKittens;

}
