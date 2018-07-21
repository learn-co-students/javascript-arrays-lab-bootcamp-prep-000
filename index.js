// Add your functions and code here

//Note: "append" means "to add at the end".
//Note: "prepend" means "to add at the beginning".

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

function appendKitten(name) {
  var nameArray = [name];
  let newArray = kittens.concat(nameArray);
  return newArray;
}

function prependKitten(name) {
  var nameArray = [name];
  let newArray = nameArray.concat(kittens);
  return newArray;
}

function removeLastKitten() {
  var newArray = kittens.slice(0, 2);
  return newArray;
}

function removeFirstKitten() {
  var newArray = kittens.slice(1);
  return newArray;
}