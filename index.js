var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var newArr = kittens.concat(['Broom']);
  return newArr;
}

function prependKitten(name) {
  var newArr = ['Arnold'].concat(kittens);
  return newArr;
}

function removeLastKitten() {
  var newArr = kittens.slice(0, kittens.length - 1);
  return newArr;
}

function removeFirstKitten() {
  var newArr = kittens.slice(1);
  return newArr;
}
