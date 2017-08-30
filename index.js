var kittens = ["Milo", "Otis", "Garfield"];

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
function prependKitten(name) {
  var newArray = [name, ...kittens];
  return newArray;
}


function appendKitten(name) {
  var newArr = kittens.slice(0);
  newArr.push(name);
  return newArr;
}

function removeLastKitten() {
  var newArr = kittens.slice(0, -1);
  return newArr;
}

function removeFirstKitten() {
  var newArr = kittens.slice(1);
  return newArr;
}
