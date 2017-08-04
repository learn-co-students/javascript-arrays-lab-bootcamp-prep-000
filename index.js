const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name){
  return[...kittens ,name  ];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten(){
  var newkittens = [...kittens];
  newkittens.pop();
  return newkittens;
}

function removeFirstKitten(){
  var newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}
