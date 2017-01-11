const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
} //appends a kitten to the end of the kittens array

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
} //prepends a kitten to the beginning of the kittens array:

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  var newKittens = [...kittens, name];
  return newKittens;
}; //appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged:

function prependKitten(name) {
  var newKittens = [name, ...kittens];
  return newKittens;
};

function removeLastKitten() {
  var newKittens = kittens.slice(0, kittens.length - 1);
  return newKittens;
};

function removeFirstKitten() {
  var newKittens = kittens.slice(1);
  return newKittens;
};
