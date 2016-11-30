const app = "I don't do much."

function kittens(array){
kittens = ["Milo", "Otis", "Garfield"];
}

function destructivelyAppendKitten(name){
  var name = "Ralph";
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
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

function appendKitten(name){
  name = "Broom";
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name){
  name = "Arnold";
  var babyKittens = [name, ...kittens]
  return babyKittens;
}

function removeLastKitten(){
  var oneLessKitten = kittens.slice(0, kittens.length -1);
  return oneLessKitten;
}

function removeFirstKitten(){
  var survivingKittens = kittens.slice(-2)
  return survivingKittens;
}
